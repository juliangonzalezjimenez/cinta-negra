basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(260)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(400)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        basic.pause(260)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    }
})
