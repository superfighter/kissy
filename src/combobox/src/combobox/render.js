/**
 * @ignore
 * Render aria properties to input element.
 * @author yiminghe@gmail.com
 */
KISSY.add("combobox/render", function (S, Controller, ComboboxTpl) {

    var ComboboxRender = Controller.ATTRS.xrender.value.extend({

        beforeCreateDom: function (renderData, childrenElSelectors) {
            S.mix(childrenElSelectors, {
                input: '#ks-combobox-input-{id}',
                trigger: '#ks-combobox-trigger-{id}',
                invalidEl: '#ks-combobox-invalid-el-{id}',
                placeholderEl: '#ks-combobox-placeholder-{id}'
            });
        },

        getKeyEventTarget: function () {
            return this.controller.get("input");
        },

        _onSetCollapsed: function (v) {
            this.controller.get("input").attr("aria-expanded", !v);
        },

        _onSetDisabled: function (v) {
            ComboboxRender.superclass._onSetDisabled.apply(this, arguments);
            this.controller.get("input").attr("disabled", v);
        }

    }, {
        ATTRS: {
            contentTpl: {
                value: ComboboxTpl
            }
        },
        HTML_PARSER: {
            value: function (el) {
                return el.one("." + this.getBaseCssClass('input')).val();
            },
            input: function (el) {
                return el.one("." + this.getBaseCssClass('input'));
            },
            trigger: function (el) {
                return el.one("." + this.getBaseCssClass('trigger'));
            },
            invalidEl: function (el) {
                return el.one("." + this.getBaseCssClass('invalid-el'));
            },
            placeholderEl: function (el) {
                return el.one("." + this.getBaseCssClass('placeholder'));
            }
        }
    });

    return ComboboxRender;
}, {
    requires: ['component/controller', './combobox-tpl']
});