class kith {
    constructor(options = {}) {
        this.v1 = options.common || [];
        this.v2 = options.length || 8;
        this.v3 = options.rejectScore || 0;
        this.v4 = options.checks || {
            "repeated": {
                "score": 10,
                "code": "(.)\\1{2}",
                "invert": true
            },
            "symbols": {
                "score": 20,
                "code": "\\W"
            },
            "uppercase": {
                "score": 20,
                "code": "[A-Z]"
            },
            "lowercase": {
                "score": 10,
                "code": "[a-z]"
            },
            "numbers": {
                "score": 15,
                "code": "[0-9]"
            }
        }
    }

    addCheck(n, d) {
        this.v4[n] = d;
    }

    test(s, op = {}) {
        const c = Object.keys(this.v4),
            cp = op.common || this.v1;
        let l = false,
            t = 0,
            o = {};
        if (this.v2 != null) {
            if (s.length >= this.v2) {
                l = true;
                o["length"] = true;
                t += 25
            } else {
                o["length"] = false;
            }
        }
        c.forEach(e => {
            const h = this.v4[e];
            if (new RegExp(h.code).test(s)) {
                o[e] = true;
                if (!Boolean(h.invert == true)) {
                    t += h.score;
                }
            } else {
                o[e] = false;
                if (h.invert == true) {
                    t += h.score;
                }
            }
        });
        return {
            "score": t,
            "checks": o,
            "rejected": cp.includes(s) || t < this.v3 ? true : false
        };
    }

    generate(l, o = {}) {
        o.characters = o.characters || "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        o.test = o.test || false;
        let p = "";
        for (let i = 0; i <= l; i++) {
            p += o.characters.charAt(Math.floor(Math.random() * o.characters.length))
        }
        if (o.test) {
            return {
                "test": this.test(p),
                "password": p
            }
        } else {
            return p;
        }
    }
}

module.exports = kith;