import arrow

def myTime():
    _t = arrow.utcnow()
    _mt = _t.to('US/Pacific')
    return _mt

def URL(r):
    h = r.get_host()
    s = r.scheme
    return f"{s}://{h}"