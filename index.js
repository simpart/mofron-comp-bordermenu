/**
 * @file   mofron-comp-header-title/index.js
 * @author simpart
 */
let mf   = require('mofron');
let Menu = require('mofron-comp-menu');

mf.comp.BorderMenu = class extends Menu {
    
    constructor (po) {
        try {
            super();
            this.name('BorderMenu');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addChild (chd, idx) {
        try {
            this.borderPos(chd, this.child().length);
            super.addChild(chd, idx);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    horizon (flg) {
        try {
            let ret = super.horizon(flg);
            if (undefined !== flg) {
                this.borderPos();
            } else {
                return ret;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    borderPos (cmp, idx) {
        try {
            if (undefined === cmp) {
                let chd = this.child();
                for (let cidx in chd) {
                    this.borderPos(chd[cidx], cidx);
                }
            } else {
                cmp.style({
                    'border'       : 'solid 1px',
                    'border-color' : this.color().getStyle(),
                    'position'     : 'relative'
                });
                if (true === this.horizon()) {
                    cmp.style({
                        'left' : '-' + idx + 'px',
                        'top'  : '0px'
                    });
                } else {
                    cmp.style({
                        'top'  : '-' + idx + 'px',
                        'left' : '0px'
                    });
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return (undefined === this.m_color) ? new mf.Color(0,0,0) : this.m_color;
            }
            /* setter */
            if (true !== mf.func.isInclude(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            let chd = this.child();
            for (let cidx in chd) {
                chd[cidx].style({
                    'border-color' : clr.getStyle()
                });
            }
            this.m_color = clr;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.BorderMenu;
