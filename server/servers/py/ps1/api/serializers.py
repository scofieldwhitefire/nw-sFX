from rest_framework import serializers

import uuid
import arrow

from .utils import *

from .models import (Plan, 
                     SubPlan as SP,
                     Testimonial as Test,
                     FAQ,
                     FaqTag as FT,
                     Blog
                     )

T = True
F = False

class getPricingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['plan', 'show', 'created']

    def getPricingHome():
        xList = []

        try:
            getPlans = Plan.objects.filter(show=T)

            for x in getPlans:
                getSubs = SP.objects.filter(plan=x, show=T)
                yList = []
                if getSubs.exists():
                    for y in getSubs:
                        dura = y.duration
                        yList.insert(0, {"min": y.min, "max": y.max, 'mut': y.multiplier})
                    
                    yList = sorted(yList, key=lambda x: x['min'])

                    l = len(yList)
                    mp = (yList[0]["min"] * float(yList[0]["mut"])) + yList[0]["min"]

                    val = {
                        "uuid": uuid.uuid4(),
                        "name": x.plan,
                        "min_profit": mp,
                        "duration": f"{dura} Days",
                        "min": yList[0]["min"],
                        "max": yList[l-1]["max"],
                    }
                    xList.insert(0, val)
        except Exception as e:
            print(e)

        class Response(object):
            data = xList

        return Response
    
    def getSubPlanHome(d):
        xList = []

        try:
            getPlan = Plan.objects.get(show=T, plan=d['plan'])
            getSubs = SP.objects.filter(plan=getPlan, show=T)

            if getSubs.exists():
                yList = []
                for x in getSubs:
                    val = {
                        "uuid": uuid.uuid4(),
                        "name": x.sub_plan,
                        "step": x.step,
                        "multiplier": float(x.multiplier),
                        "duration": f"{x.duration} Days",
                        "min":x .min,
                        "max": x.max
                    }
                    yList.insert(0, val)
            xList = {
                "plan": d['plan'],
                "subPlans": sorted(yList, key=lambda x: x['min'])
            }
        except Exception as e:
            print(e)

        class Response(object):
            data = xList

        return Response


class getTestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['plan', 'show', 'created']

    def getTestimonialHome(req):
        xList = []

        try:
            getTest = Test.objects.filter(show=T)

            for x in getTest:
                
                val = {
                    "uuid": x.uuid,
                    "name": x.name,
                    "message": x.message[:230],
                    "job": x.job,
                    "photo": f"{URL(req)}{x.photo.url}",
                }
                xList.insert(0, val)
        except Exception as e:
            print(e)

        class Response(object):
            data = xList

        return Response


class getFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['question', 'answer', 'show', 'created']

    def getFAQHome(s):
        xList = []

        try:
            s = int(s)
            do = T
        except:
            do = F

        try:
            if do:
                getFAQ = FAQ.objects.filter(show=T)[:s]

                for x in getFAQ:
                    
                    val = {
                        "uuid": x.uuid,
                        "question": x.question,
                        "answer": x.answer,
                    }
                    xList.insert(0, val)
            else:
                faqTag = FT.objects.filter(active=T)
                for x in faqTag:
                    getFAQ = FAQ.objects.filter(show=T, tag= x)

                    yList = []

                    for y in getFAQ:
                        
                        val = {
                            "uuid": y.uuid,
                            "question": y.question,
                            "answer": y.answer,
                        }
                        yList.insert(0, val)
                    xList.insert(0, {"tag":x.name.title(), "faqs": yList})

        except Exception as e:
            print(e)

        class Response(object):
            data = xList

        return Response


class getBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title', 'author', 'show', 'created']

    def getBlogHome(req, s, t='-'):
        xList = []

        try:
            if t != 'all':
                sr = 0
            else:
                s = s * 8
                sr = s - 8
            getFAQ = Blog.objects.filter(show=T)[sr:s]

            for x in getFAQ:
                tags = x.tags.split(";")
                date = x.uploaded.strftime("%d %b, %Y")
                title = x.title
                
                val = {
                    "uuid": uuid.uuid4(),
                    "photo": f"{URL(req)}{x.photo.url}",
                    "tags": tags,
                    "slug": x.slug,
                    "title": f"{title[:20]}",
                    "message": x.message[:115],
                    "img": f"{URL(req)}{x.img.url}",
                    "author": x.author,
                    "uploaded": date,
                }
                if t != 'all':
                    xList.insert(0, val)
                else:
                    xList.append(val)
        except Exception as e:
            print(e)

        class Response(object):
            data = xList

        return Response

    def getAllBlogHome(req, p):
        """
        val = {
        blogs: [],
        categories: [{name: "", num: 0},],
        topPost: [{post:"",img:"",date:""},],
        tags: []
        }
        """
        xList = []

        try:
            val = {
                "blogs": getBlogSerializer.getBlogHome(req, p, 'all').data,
                "categories": [{"name": "", "num": 0},],
                "tags": getBlogSerializer.getTags(),
                "topPost": getBlogSerializer.getTopPost(req),
            }
            xList = val
        except Exception as e:
            print(e)

        class Response(object):
            data = xList

        return Response

    def getTags():
        xList = []
        getAll = Blog.objects.filter(show=T)

        if getAll.exists():
            for x in getAll:
                if len(xList) <= 10:
                    tag = x.tags
                    tag = tag.split(";")
                    for i in tag:
                        if i not in xList:
                            xList.append(i)
                else:
                    break
        xList.insert(0, 'all')
        return xList

    def getAuthor():
        xList = []
        getAll = Blog.objects.filter(show=T)

        if getAll.exists():
            for x in getAll:
                if len(xList) <= 10:
                    tag = x.tags
                    tag = tag.split(";")
                    for i in tag:
                        if i not in xList:
                            xList.append(i)
                else:
                    break

        return xList

    def getTopPost(req):
        xList = []
        getFAQ = Blog.objects.filter(show=T)[:5]

        try:
            for x in getFAQ:
                date = x.uploaded.strftime("%d %b, %Y")
                title = x.title
                
                val = {
                    "uuid": uuid.uuid4(),
                    "photo": f"{URL(req)}{x.photo.url}",
                    "title": f"{title[:20]}",
                    "slug": x.slug,
                    "uploaded": date,
                }
                xList.append(val)

        except Exception as e:
            print(e)

        return xList 


class calculatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title', 'author', 'show', 'created']

    def calculatorHome(d):

        try:
            plan = d['plan']
            subPlan = d['subPlan']
            amt = d['amt']

            amt = int(amt)
            if plan.lower() == 'gold':
                if subPlan.lower() == 'tanzanite':
                    min_ = 50
                    max_ = 150
                    dura = '7 Days'
                    xVal = 2
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
                elif subPlan.lower() == 'beryl':
                    min_ = 200
                    max_ = 400
                    dura = '7 Days'
                    xVal = 3
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
            elif plan.lower() == 'platinum':
                if subPlan.lower() == 'musgravite':
                    min_ = 500
                    max_ = 2000
                    dura = '15 Days'
                    xVal = 2.5
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
                elif subPlan.lower() == 'alexandrite':
                    min_ = 2500
                    max_ = 15000
                    dura = '15 Days'
                    xVal = 2.7
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
            elif plan.lower() == 'diamond':
                if subPlan.lower() == 'emerald':
                    min_ = 20000
                    max_ = 50000
                    dura = '28 Days'
                    xVal = 5
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
                elif subPlan.lower() == 'ruby':
                    min_ = 60000
                    max_ = 100000
                    dura = '28 Days'
                    xVal = 5.33
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
                elif subPlan.lower() == 'jadeite':
                    min_ = 120000
                    max_ = 250000
                    dura = '28 Days'
                    xVal = 6
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
                elif subPlan.lower() == 'diamond plus':
                    min_ = 300000
                    max_ = 650000
                    dura = '28 Days'
                    xVal = 7.7
                    if amt >= min_ and amt <= max_:
                        do = True
                    elif amt < min_:
                        do = False
                        error = "Less than Min. ($" + str(min_) + ")"
                        hasError = True
                    elif amt > max_:
                        do = False
                        error = "Higher than Max. ($" + str(max_) + ")"
                        hasError = True
                    else:
                        do = False
            if do:
                profit = int(amt) * xVal
                total = profit + int(amt)

                status = {
                    'profit': profit,
                    'total': total,
                    'dura':dura,
                    'status': 200,
                }
            else:
                if hasError:
                    status = {
                        'error': error,
                        'status': 302,
                    }
                else:
                    status = {
                        'error': 'Internal Server Error',
                        'status': 303,
                    }
            # except Exception as e:
            # 	print(e)
            # 	status = {
            # 		'error': 'Invalid Input' ,
            # 		'status': 500,
            # 	}



        except Exception as e:
            print(e) 
            status = {
                'error': 'Invalid Input' ,
                'status': 500,
            }

        xList = status
        class Response(object):
            data = xList

        return Response


