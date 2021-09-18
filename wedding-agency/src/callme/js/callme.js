! function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery)
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent,
        iPhone = /iphone/i.test(ua),
        chrome = /chrome/i.test(ua),
        android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select())
            })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), {
                begin: begin,
                end: end
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = callMe(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0
            }
            return settings = callMe.extend({
                autoclear: callMe.mask.autoclear,
                placeholder: callMe.mask.placeholder,
                completed: null
            }, settings), defs = v.mask.definitions, tests = [], partialPosition = len = mask.length, firstNonMaskPos = null, callMe.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null)
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++)
                            if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input)
                    }
                }

                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0)
                }

                function seekNext(pos) {
                    for (; ++pos < len && !tests[pos];);
                    return pos
                }

                function seekPrev(pos) {
                    for (; --pos >= 0 && !tests[pos];);
                    return pos
                }

                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++)
                            if (tests[i]) {
                                if (!(len > j && tests[i].test(buffer[j]))) break;
                                buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j)
                            }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin))
                    }
                }

                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++)
                        if (tests[i]) {
                            if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                            c = t
                        }
                }

                function androidInputEvent() {
                    var curVal = input.val(),
                        pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1];) pos.begin--;
                        if (0 === pos.begin)
                            for (; pos.begin < firstNonMaskPos && !tests[pos.begin];) pos.begin++;
                        input.caret(pos.begin, pos.begin)
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin];) pos.begin++;
                        input.caret(pos.begin, pos.begin)
                    }
                    tryFireCompleted()
                }

                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change()
                }

                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), input.caret(0, checkVal()), e.preventDefault())
                    }
                }

                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode,
                            pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        callMe.proxy(callMe.fn.caret, input, next)()
                                    };
                                    setTimeout(proxy, 0)
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted()
                            }
                            e.preventDefault()
                        }
                    }
                }

                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i))
                }

                function writeBuffer() {
                    input.val(buffer.join(""))
                }

                function checkVal(allow) {
                    var i, c, pos, test = input.val(),
                        lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++)
                        if (tests[i]) {
                            for (buffer[i] = getPlaceholder(i); pos++ < test.length;)
                                if (c = test.charAt(pos - 1), tests[i].test(c)) {
                                    buffer[i] = c, lastMatch = i;
                                    break
                                }
                            if (pos > test.length) {
                                clearBuffer(i + 1, len);
                                break
                            }
                        } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), partialPosition ? i : firstNonMaskPos
                }
                var input = callMe(this),
                    buffer = callMe.map(mask.split(""), function(c, i) {
                        return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0
                    }),
                    defaultBuffer = buffer.join(""),
                    focusText = input.val();
                input.data(callMe.mask.dataName, function() {
                    return callMe.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null
                    }).join("")
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName)
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos))
                        }, 10)
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted()
                    }, 0)
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), checkVal()
            })
        }
    })
});
'use strict';
(function(callMe) {
    function callmeApp(settings, template) {
        var callme = this,
            callmeKey = {},
            $body = callMe('body');
        callme.el = {};
        callme.tpl = {};
        callme.settings = {
            'main': settings
        };
        this.load = function() {
            setKey();
            callme.settings.main.type = getKeys(callme.settings.main, callmeKey);
            callme.loadHTML();
            callme.saveLinks();
            callme.createButton();
            callme.loadTemplates();
            callme.run();
            callme.triggerEvent('load', 'finish')
        };
        this.saveReferral = function() {
            if (!callme.dataLoad('callme-ref') && document.referrer) {
                callme.dataSave('callme-ref', document.referrer)
            }
        };
        this.speak = function($form, cls, text) {
            var $el = $form.find('[data-callme-result]');
            if (cls && text) {
                $el.html('<div class=\'' + cls + '\'>' + text + '</div>')
            } else if (!cls && !text) {
                $el.html('')
            }
        };
        String.prototype.clean = function() {
            return this.replace(/([\"\<\>\'])/gi, '')
        };
        String.prototype.isCap = function() {
            return this === this.toUpperCase()
        };
        String.prototype.setVars = function(what, to) {
            return this.replace(new RegExp('{{:' + what + '}}', 'gi'), to)
        };
        String.prototype.isMailValid = function() {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this)
        };
        String.prototype.translit = function() {
            var txt = this.toLowerCase(),
                arr = [
                    ['я', 'ya'],
                    ['ю', 'yu'],
                    ['ч', 'ch'],
                    ['ш', 'sh'],
                    ['щ', 'sch'],
                    ['ж', 'zh'],
                    ['а', 'a'],
                    ['б', 'b'],
                    ['в', 'v'],
                    ['ґ', 'g'],
                    ['г', 'g'],
                    ['д', 'd'],
                    ['е', 'e'],
                    ['є', 'je'],
                    ['і', 'i'],
                    ['ї', 'ji'],
                    ['ё', 'e'],
                    ['з', 'z'],
                    ['и', 'i'],
                    ['й', 'j'],
                    ['к', 'k'],
                    ['л', 'l'],
                    ['м', 'm'],
                    ['н', 'n'],
                    ['о', 'o'],
                    ['п', 'p'],
                    ['р', 'r'],
                    ['с', 's'],
                    ['т', 't'],
                    ['у', 'u'],
                    ['ф', 'f'],
                    ['х', 'h'],
                    ['ц', 'c'],
                    ['ы', 'y'],
                    ['ь', ''],
                    ['ъ', ''],
                    ['э', 'e'],
                    ['ю', 'yu'],
                    ['я', 'ya'],
                    ['\"', '\''],
                    ['\«', '\''],
                    ['\»', '\''],
                    ['\`', '\''],
                    ['\–', '\-'],
                    ['  ', ' ']
                ];
            arr.map(function(item) {
                txt = txt.replace(new RegExp(item[0], 'g'), item[1])
            });
            return txt
        };
        this.closeForm = function() {
            callme.triggerEvent('close', 'start');
            callme.el.$form.fadeOut(settings.animationSpeed, function() {
                callme.el.$container.removeClass();
                callme.triggerEvent('close', 'finish')
            });
            callme.el.$bg.fadeOut(settings.animationSpeed)
        };
        this.centerForm = function() {
            var doc = {
                    width: callMe(window).width(),
                    height: callMe(window).height(),
                    fullHeight: callMe(document).height(),
                    scroll: callMe(document).scrollTop()
                },
                form = {
                    width: callme.el.$form.width(),
                    height: callme.el.$form.height()
                };
            var leftPos = doc.width / 2 - form.width / 2,
                topPos = doc.height / 2 - form.height / 2 + doc.scroll;
            callme.el.$form.css({
                'left': leftPos,
                'top': topPos > 0 ? topPos : 0
            });
            callme.el.$bg.css('height', $body.outerHeight(true))
        };
        this.showForm = function(e, settings) {
            callme.triggerEvent('show', 'start');
            callme.el.$container.removeClass();
            if (['left', 'right'].indexOf(settings.form.align) !== -1) {
                callme.el.$container.addClass('form-aligned align-' + settings.form.align)
            } else {
                callme.centerForm()
            }
            callme.el.$bg.fadeToggle(settings.animationSpeed);
            callme.el.$form.fadeToggle(settings.animationSpeed, function() {
                callme.triggerEvent('show', 'finish')
            })
        };
        this.httpGet = function(url, postData, type) {
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest(),
                    data = new FormData(),
                    type = type ? type : 'GET';
                postData && postData.map(function(item) {
                    for (var key in item) {
                        data.append(key, item[key])
                    }
                });
                xhr.open(type, url, true);
                xhr.onload = function() {
                    if (this.status == 200) {
                        resolve(this.response);
                        callme.triggerEvent('request', 'finish')
                    } else {
                        var error = new Error(this.statusText);
                        error.code = this.status;
                        reject(error);
                        callme.triggerEvent('request', 'fail')
                    }
                };
                xhr.onerror = function() {
                    reject(new Error('Network Error'))
                };
                xhr.send(data)
            })
        };
        this.getCaptcha = function(settings, $form) {
            if (settings.type < 1) {
                callme.el.$captcha.addClass('hidden');
                return
            }
            callme.el.$captcha.removeClass('hidden');
            var $el = callme.el.$captcha.find('[data-callme-captcha]'),
                x = getRandom(7, 12),
                y = getRandom(1, 6),
                oper = Math.floor(Math.random() * 2) === 0,
                result = oper ? x + y : x - y,
                operTxt = oper ? '+' : '-';
            $el.text(x + ' ' + operTxt + ' ' + y + ' = ...');
            callme.dataSave('callme-cpt', result);
            settings.captcha.result = result;

            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            }
        };
        this.clearForm = function(form) {
            form.find('[type="text"], [type="email"], [type="tel"]').val('');
            form.find('select').prop('selectedIndex', 0);
            form.find('textarea').value = '';
            form.find('[type="checkbox"]').attr('checked', false);
            form.find('[type="checkbox"]').prop('checked', false);
            callme.speak(form)
        };
        this.submitForm = function(_settings, e) {
            var $btn = v(e.target),
                formError = false,
                $form = v(e.target).parents('[data-callme-form]') || callMe(e.target).parents('form'),
                $captcha = $form.find('#cme-captcha'),
                config = $form.attr('data-callme-form') || 'main',
                settings = callme.settings[config];
            if ($form.length === 0) {
                $form = callMe(e.target).closest('form')
            }
            var timePrev = parseInt(callme.dataLoad('callme-clock') || 0),
                timeCur = new Date().getTime(),
                difference = Math.round((timeCur - timePrev) / 1000);
            if (difference < 60) {
                callme.speak($form, 'callme-error', settings.alerts.fails.sent);
                return
            }
            if (settings.captcha.show && settings.type > 0 && $form.find('[name=callme-captcha]').length > 0) {
                var $captchaField = $form.find('[name=callme-captcha]'),
                    userCaptcha = $captchaField.val() || false;
                if (settings.captcha.result != userCaptcha) {
                    formError = true;
                    callme.speak($form, 'callme-error', settings.captcha.error);
                    $captchaField.addClass('has-error');
                    callme.getCaptcha(settings, $form);
                    callme.triggerEvent('captcha', 'error');
                    return
                }
            }
            $form.find('[type="checkbox"][data-required="true"]').on('click', function() {
                var $el = callMe(this);
                if ($el.is(':checked') && $el.parents('label')) {
                    $el.parents('label').removeClass('has-error')
                }
            });
            $form.find('[type="text"],[type="tel"],[type="email"],[type="checkbox"],textarea').each(function() {
                var $el = callMe(this);
                if ($el.data('required')) {
                    if ($el.attr('type') == 'checkbox') {
                        if (!$el.is(':checked')) {
                            $el.parents('label') && $el.parents('label').addClass('has-error');
                            formError = true
                        }
                    } else if ($el.attr('type') == 'email') {
                        if (!$el.val().isMailValid()) {
                            $el.addClass('has-error');
                            formError = true
                        }
                    } else {
                        if ($el.val().length == 0) {
                            $el.addClass('has-error');
                            formError = true
                        }
                    }
                } else if ($el.attr('type') == 'email') {
                    if ($el.val().length > 0 && !$el.val().isMailValid()) {
                        $el.addClass('has-error');
                        formError = true
                    }
                }
            });
            if (formError) {
                callme.triggerEvent('submit', 'fail');
                callme.speak($form, 'callme-error', settings.alerts.fails.required);
                return false
            } else {
                callme.triggerEvent('submit', 'start');
                callme.speak($form, 'callme-sending', settings.alerts.process)
            }
            var sentTime = callme.dataLoad('callme-sent') || 0,
                formData = [];
            $form.find('[type="text"],[type="tel"],[type="email"],textarea').each(function() {
                var $el = $(this);
                var name = $el.attr('name');
                var val = $el.val();
                var sms = $el.data('sms');
                var type = $el.attr('type') || 'textarea';
                val && formData.push(callme.getLetterObj(name, val, sms, type))
            });
            $form.find('select').each(function() {
                var $el = callMe(this);
                var name = $el.attr('name'),
                    val = $el.find(':selected').val() || $el.find(':selected').text(),
                    sms = $el.data('sms');
                if (name === 'receiver') {
                    val = $el[0].selectedIndex
                }
                formData.push(callme.getLetterObj(name, val, sms, 'select'))
            });
            $form.find('[type="checkbox"]').each(function() {
                var name = v(this).attr('name');
                var val = callMe(this).is(':checked') ? settings.alerts.yes : settings.alerts.no;
                var sms = callMe(this).data('sms');
                formData.push(callme.getLetterObj(name, val, sms, 'checkbox'))
            });
            var attr = callme.dataLoad('callme-attr');
            if (attr) {
                formData.push(callme.getLetterObj(settings.mail.linkAttribute, attr, false, 'attribute'))
            }
            var referrer = callme.dataLoad('callme-ref');
            if (referrer) {
                formData.push(callme.getLetterObj(settings.mail.referrer, referrer, false, 'referrer'))
            }
            formData.push(callme.getLetterObj(settings.mail.url, location.href, false, 'page-url'));
            $btn.attr('disabled', 'disabled');
            var toSend = {
                data: formData,
                smtp: settings.mail.smtp || false,
                sms: settings.sms || {}
            };
            if (settings.type < 1) {
                toSend.sms.send = false
            }
            callMe.post(settings.folder + 'php/go.php', toSend, function(data, status) {
                data = JSON.parse(data);
                var result = data.sent;
                if (result === true) {
                    callme.triggerEvent('submit', 'finish');
                    var clock = new Date().getTime();
                    callme.speak($form, 'callme-success', settings.alerts.success);
                    callme.dataSave('callme-clock', clock);
                    callme.delay('closeForm', 5);
                    callme.delay('clearForm', 5, $form);
                    $btn.removeAttr('disabled')
                } else {
                    callme.triggerEvent('send', 'fail');
                    callme.speak($form, 'callme-error', data.reason || settings.alerts.fails.sent)
                }
            })
        };
        this.customForm = function(config, e) {
            if (callme.settings[config]) {
                callme.buildForm(callme.settings[config], e, config)
            } else {
                (function() {
                    var folder = findCallmeFolder();
                    callme.httpGet(folder + 'js/config/' + config + '.js').then(function(data) {
                        var settings = JSON.parse(data);
                        settings.type = getKeys(settings, callmeKey);
                        callme.settings[config] = settings;
                        callme.settings[config].folder = folder;
                        callme.buildForm(settings, e, config)
                    }).catch(function(error) {
                        return console.error(error)
                    })
                })()
            }
        };
        this.run = function() {
            $body.on('click', '[data-callme-config]', function(e) {
                e.preventDefault();
                var config = callMe(this).data('callme-config') || 'main';
                config && callme.customForm(config, e)
            });
            $body.on('click', '[data-callme-action]', function(e) {
                e.preventDefault();
                var fncName = callMe(this).data('callme-action');
                if (typeof callme[fncName] === 'function') {
                    callme[fncName](settings, e)
                }
            });
            callMe(document).keyup(function(a) {
                if (a.keyCode === 27 && callme.el.$form.is(':visible')) {
                    callme.closeForm()
                }
            });
            var resizeEnd = void 0;
            window.onresize = function() {
                clearTimeout(resizeEnd);
                resizeEnd = setTimeout(callme.centerForm, 50)
            };
            callme.el.$form.on('keypress', 'input, textarea', function() {
                callMe(this).removeClass('has-error')
            });
            callme.saveReferral();
            $body.on('click', '.submit-callme-form', function(e) {
                e.preventDefault();
                callme.submitForm(e)
            })
        };
        this.saveLinks = function() {
            callme.el.$container = $body.find('#cme-container');
            callme.el.$form = $('#cme-form-main');
            callme.el.$btn = $body.find('#cme-btn');
            callme.el.$fields = $body.find('[data-callme="fields"]');
            callme.el.$bg = $body.find('#cme-back');
            callme.el.$captcha = $body.find('#cme-captcha');
            callme.el.$btn.addClass('cme-tpl-' + settings.form.template);
            callme.el.$form.hide()
        };
        this.getLetterObj = function(key, value, sms, type) {
            return {
                key: key,
                value: value,
                type: type,
                sms: !!sms || false,
                smsKey: sms && key ? key.translit() : '',
                smsValue: sms && value ? value.translit() : ''
            }
        };
        this.loadTemplates = function() {
            callme.el.$form.find('[data-callme-template]').each(function() {
                var $e = callMe(this);
                callme.tpl[$e.data('callme-template')] = $e.html()
            })
        };
        this.loadHTML = function() {
            $body.append(template);
            callme.loadCSS(settings.form.template)
        };
        this.loadCSS = function(file) {
            var fileName = settings.folder + 'css/' + file + '.css';
            if ($body.find('[href*="' + fileName + '"]').length === 0) {
                $body.append('<link rel="stylesheet" type="text/css" href="' + fileName + '">')
            }
        };
        this.createButton = function() {
            if (!settings.button.show) {
                callme.el.$btn.remove()
            } else {
                callme.el.$btn.find('a').html(settings.button.text)
            }
        };
        this.buildForm = function(settings, event, config) {
            callme.loadCSS(settings.form.template);
            callme.el.$form.removeClass('a').addClass('cme-tpl-' + settings.form.template);
            if (callme.el.$form.is(':visible')) {
                callme.closeForm();
                return
            }
            if (config) {
                callme.el.$form.attr('data-callme-form', config)
            } else {
                callme.el.$form.attr('data-callme-form', '')
            }
            callme.el.$form.removeClass();
            callme.el.$form.addClass('cme-tpl-' + settings.form.template);
            var $captchaField = callme.el.$form.find('[name=callme-captcha]');
            $captchaField.val('').removeClass('has-error');
            if (!!settings.captcha.show) {
                callme.getCaptcha(settings, callme.el.$form)
            } else {
                callme.el.$captcha.addClass('hidden')
            }
            var tmp = '';
            callme.el.$form.find('[data-callme-field]').each(function(i, el) {
                var field = callMe(el).data('callme-field');
                if (settings.form[field]) {
                    callMe(el).text(settings.form[field])
                } else {
                    (function() {
                        var tmp = settings;
                        field.split('.').map(function(key) {
                            tmp = tmp[key] || ''
                        });
                        callMe(el).text(tmp)
                    })()
                }
            });
            callme.speak(callme.el.$form);
            var allRequired = true;
            settings.fields.map(function(field) {
                if (field.required) {
                    allRequired = false;
                    return
                }
            });
            settings.fields.map(function(field) {
                tmp += callme.buildField(field, settings.type, allRequired)
            });
            callme.el.$fields.html(tmp);
            settings.type > 0 && callme.el.$fields.find('[type="tel"]').each(function(i, el) {
                var fieldMask = callMe(el).data('mask');
                fieldMask.length && callMe(el).mask(fieldMask)
            });
            if (settings.type === 0 || settings.license.show) {
                callme.showLicense(true)
            } else {
                callme.showLicense(settings.license.show)
            }
            callme.showForm(event, settings);
            var attr = callMe(event.target).data('callme-attr') || false;
            if (attr) {
                callme.dataSave('callme-attr', attr)
            } else {
                callme.dataDelete('callme-attr')
            }
            callme.triggerEvent('formCreate', 'finish')
        };
        this.showLicense = function(show) {
            var $place = callme.el.$form.find('.cme-btn-place span'),
                URL = [103, 101, 116, 99, 97, 108, 108, 109, 101, 46, 99, 111, 109],
                txt = [67, 97, 108, 108, 109, 101];
            if (!show) {
                $place.html('');
                return
            }
            $place.html(callMe('<a>', {
                text: String.fromCharCode.apply(null, txt),
                target: '_blank',
                href: 'http://' + String.fromCharCode.apply(null, URL)
            }))
        };
        this.triggerEvent = function(type, result) {
            callMe(window).trigger('callme.' + type + '.' + result)
        };
        var setKey = function setKey() {
            var domain = arguments.length <= 0 || arguments[0] === undefined ? document.domain : arguments[0];
            var lic = '';
            domain = unescape(domain.replace('www.', '').toLowerCase());
            for (var i = 0; i < domain.length; i++) {
                lic += i % 2 == 0 ? domain.charCodeAt(i) * 5 : domain.charCodeAt(i) * 9
            }
            lic = lic.split('');
            for (var _i = 0; _i < lic.length; _i++) {
                lic[_i] = _i % 3 == 0 ? Number(lic[_i]) + 6 : Number(lic[_i]) + 9;
                lic[_i] = _i % 2 == 0 ? lic[_i] * 3 : lic[_i] * 2
            }
            for (var _i2 = 0; _i2 < lic.length; _i2++) {
                if (_i2 % 2 == 0 && _i2 < lic.length / 2) {
                    var v = lic[_i2];
                    lic[_i2] = lic[lic.length - _i2 - 1];
                    lic[lic.length - _i2 - 1] = v
                }
            }
            lic = lic.join('');
            lic += lic;
            lic = lic.substr(0, 60);
            callmeKey = lic
        };
        var getKeys = function getKeys(settings, callmeKey) {
            var isDev = location.port.indexOf('8') > -1;
            if (settings.license.key == callmeKey || isDev) return 1;
            return 0
        };
        this.dataLoad = function(key) {
            return localStorage.getItem(key) || false
        };
        this.dataSave = function(key, value) {
            localStorage.setItem(key, value)
        };
        this.dataDelete = function(key) {
            localStorage.removeItem(key)
        };
        this.buildField = function(field, type, allRequired) {
            var options = '';
            var caption = field.caption || null;
            if (type === 0) {
                if (field.type === 'select' || field.type === 'receiver' || field.type === 'checkbox') {
                    field.type = 'text'
                }
            } else {
                (field.type === 'select' || field.type === 'receiver') && field.options && field.options.map(function(option) {
                    options += '<option>' + option.clean() + '</option>'
                })
            }
            return callme.tpl[field.type].setVars('name', field.name.clean()).setVars('caption', caption ? caption : field.name.clean()).setVars('asterisk', field.required || allRequired ? '*' : '').setVars('placeholder', field.mask || field.placeholder || field.name).setVars('required', allRequired || field.required || 'false').setVars('options', options).setVars('sms', type > 0 && field.sms).setVars('mask', field.mask)
        };
        this.delay = function(funcName, timer) {
            var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
            setTimeout(function() {
                eval('callme.' + funcName + '(params)')
            }, timer * 1000)
        }
    }

    function findCallmeFolder() {
        var src = callMe('html').find('script[src*="/callme."]').attr('src');
        if (!src) {
            throw new Error('Callme not installed, check docs at https://getcallme.com/en/docs.html');
            return false
        } else {
            src = src.replace('js/callme.js', '');
            src = src.replace('js/callme.unpacked.js', '');
            return src.replace('js/callme.min.js', '') || false
        }
    }
    var folder = findCallmeFolder();
    callMe.ajax({
        type: 'get',
        cache: false,
        url: folder + 'js/config/main.js',
        dataType: 'JSON',
        error: function error(xhr, status, _error) {
            console.error('Settings not found')
        },
        success: function success(settings) {
            settings.folder = folder;
            callMe.ajax({
                type: 'get',
                cache: false,
                url: settings.folder + 'html/form.html',
                dataType: 'text',
                error: function error(xhr, status, _error2) {
                    console.error('Form file not found')
                },
                success: function success(template) {
                    var callmeObj = new callmeApp(settings, template);
                    callmeObj.load()
                }
            })
        }
    })
})(jQuery);