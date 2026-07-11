/* @ds-bundle: {"format":3,"namespace":"NASJDesignSystem_1ee8d7","components":[{"name":"Annotation","sourcePath":"components/content/Annotation.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"ThreadDivider","sourcePath":"components/content/ThreadDivider.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Annotation.jsx":"17f4f948c6aa","components/content/Avatar.jsx":"24a6be80d9fd","components/content/Badge.jsx":"14bb088622fc","components/content/Card.jsx":"4f30288b51a2","components/content/PullQuote.jsx":"02544312c8c8","components/content/ThreadDivider.jsx":"64be10f9aece","components/core/Button.jsx":"528ada40e41f","components/core/Checkbox.jsx":"b9f5f99b6f7a","components/core/Input.jsx":"ecbdb535ade6","components/core/Radio.jsx":"ebf95ec3745b","components/core/Switch.jsx":"29fc65e7f907","components/feedback/Dialog.jsx":"aa5678133206","components/feedback/Tooltip.jsx":"b86c1bbc2ebd","components/navigation/Tabs.jsx":"3c78b9dd9725"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NASJDesignSystem_1ee8d7 = window.NASJDesignSystem_1ee8d7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Annotation.jsx
try { (() => {
/**
 * NASJ Annotation — the citation / reference mark. Cormorant Garamond italic,
 * stone colour, set small and quiet. On Arabic pages this is the ONLY English
 * permitted, and only for the allowed exception set: citations, source
 * references, DOI identifiers, institutional names, and source metadata.
 * It is NOT a translation or gloss of adjacent Arabic — never place it beneath
 * an Arabic heading as an English subtitle.
 */
function Annotation({
  children,
  as = 'span',
  style = {}
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    dir: "ltr",
    style: {
      fontFamily: 'var(--font-annotation)',
      fontStyle: 'italic',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--annotation)',
      letterSpacing: '0.01em',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Annotation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Annotation.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
/** NASJ Avatar — initials or image in a cut square (near-zero radius). */
function Avatar({
  name = '',
  src,
  size = 40,
  style = {}
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('');
  return /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'transparent' : 'var(--thread-tint)',
      color: 'var(--thread-deep)',
      border: '1px solid var(--paper-edge)',
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.42,
      lineHeight: 1
    }
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
/**
 * NASJ Badge — a small woven label. tones: thread, ink, quiet.
 * Variant 'outline' shows the tone as a hairline instead of a wash.
 */
function Badge({
  tone = 'thread',
  variant = 'soft',
  children,
  style = {}
}) {
  const tones = {
    thread: {
      soft: {
        background: 'var(--thread-tint)',
        color: 'var(--thread-deep)'
      },
      outline: {
        color: 'var(--thread)',
        borderColor: 'var(--thread)'
      }
    },
    ink: {
      soft: {
        background: 'var(--paper-sunken)',
        color: 'var(--ink)'
      },
      outline: {
        color: 'var(--ink)',
        borderColor: 'var(--ink)'
      }
    },
    quiet: {
      soft: {
        background: 'transparent',
        color: 'var(--annotation)'
      },
      outline: {
        color: 'var(--annotation)',
        borderColor: 'var(--annotation)'
      }
    }
  };
  const t = tones[tone][variant];
  return /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1,
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      border: variant === 'outline' ? '1px solid' : '1px solid transparent',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NASJ Card — a leaf of paper. Cut edges (near-zero radius), a single hairline,
 * no drop shadow by default; it sits ON the page, not floating above it.
 * On hover it lifts by translation only (2px), never by shadow bloom.
 */
function Card({
  interactive = false,
  accent = false,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--paper-raised)',
      border: '1px solid var(--paper-edge)',
      borderTop: accent ? '2px solid var(--thread)' : '1px solid var(--paper-edge)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-3)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform var(--dur-slow) var(--ease-material)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
/**
 * NASJ PullQuote — Amiri display, large and quiet, set against paper with a
 * thread rule down the leading edge. For a single load-bearing sentence.
 */
function PullQuote({
  children,
  cite,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    dir: "rtl",
    style: {
      margin: 0,
      paddingInlineStart: 'var(--space-3)',
      borderInlineStart: '2px solid var(--thread)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      lineHeight: 1.45,
      color: 'var(--ink)'
    }
  }, children), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-annotation)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'var(--annotation)'
    }
  }, cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/ThreadDivider.jsx
try { (() => {
/**
 * NASJ ThreadDivider — a horizontal rule read as a single drawn thread.
 * A small knot sits on the line; the rule fades at both ends like a loose weft.
 */
function ThreadDivider({
  knot = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 24,
      display: 'flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1.5,
      background: 'linear-gradient(90deg, transparent, var(--thread-line) 18%, var(--thread-line) 82%, transparent)'
    }
  }), knot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--thread)'
    }
  }));
}
Object.assign(__ds_scope, { ThreadDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ThreadDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NASJ Button — a quiet, material control.
 * Variants: primary (thread fill), secondary (ink outline), ghost (text only).
 * Motion is opacity/translation only; press settles down 1px.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 15
    },
    md: {
      padding: '12px 24px',
      fontSize: 17
    },
    lg: {
      padding: '16px 40px',
      fontSize: 19
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    lineHeight: 1.2,
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--dur-quick) var(--ease-quiet), color var(--dur-quick) var(--ease-quiet), transform var(--dur-quick) var(--ease-material), opacity var(--dur-quick) var(--ease-quiet)',
    transform: press && !disabled ? 'translateY(1px)' : 'translateY(0)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--thread-deep)' : 'var(--thread)',
      color: 'var(--paper)'
    },
    secondary: {
      background: hover && !disabled ? 'var(--ink)' : 'transparent',
      color: hover && !disabled ? 'var(--paper)' : 'var(--ink)',
      borderColor: 'var(--ink)'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--thread-deep)' : 'var(--thread)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    dir: "rtl",
    disabled: as === 'button' ? disabled : undefined,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** NASJ Checkbox — a marked square, ink check on paper. */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const [internal, setInternal] = React.useState(checked);
  React.useEffect(() => setInternal(checked), [checked]);
  const on = onChange ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!onChange) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    dir: "rtl",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${on ? 'var(--thread)' : 'var(--ink)'}`,
      background: on ? 'var(--thread)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'background var(--dur-quick) var(--ease-quiet), border-color var(--dur-quick) var(--ease-quiet)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      opacity: on ? 1 : 0,
      transition: 'opacity var(--dur-quick)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5L5 9.5L10 3",
    stroke: "var(--paper)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NASJ Input — a single-line field on paper. RTL. Underline-first: the field
 * reads as a ruled line, not a boxed control. Focus draws the thread.
 */
function Input({
  label,
  invalid = false,
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      opacity: disabled ? 0.5 : 1
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    dir: "rtl",
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--ink)',
      background: 'transparent',
      border: 'none',
      borderBottom: `1.5px solid ${invalid ? '#a23b2d' : focus ? 'var(--thread)' : 'var(--paper-edge)'}`,
      padding: '8px 2px',
      outline: 'none',
      transition: 'border-color var(--dur-quick) var(--ease-quiet)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
/** NASJ Radio group — circular marks; one thread dot lit. */
function Radio({
  options = [],
  value,
  onChange,
  name,
  disabled = false,
  style = {}
}) {
  const groupName = name || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, options.map(opt => {
    const val = typeof opt === 'string' ? opt : opt.value;
    const lab = typeof opt === 'string' ? opt : opt.label;
    const on = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => !disabled && onChange && onChange(val),
      role: "radio",
      "aria-checked": on,
      style: {
        width: 20,
        height: 20,
        borderRadius: 999,
        border: `1.5px solid ${on ? 'var(--thread)' : 'var(--ink)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'border-color var(--dur-quick) var(--ease-quiet)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 999,
        background: 'var(--thread)',
        transform: on ? 'scale(1)' : 'scale(0)',
        opacity: on ? 1 : 0,
        transition: 'transform var(--dur-quick) var(--ease-material), opacity var(--dur-quick)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        color: 'var(--ink)',
        name: groupName
      }
    }, lab));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** NASJ Switch — a woven toggle. Slow slide, opacity/translation only. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const [internal, setInternal] = React.useState(checked);
  React.useEffect(() => setInternal(checked), [checked]);
  const on = onChange ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!onChange) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    dir: "rtl",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "switch",
    "aria-checked": on,
    style: {
      width: 44,
      height: 24,
      borderRadius: 999,
      background: on ? 'var(--thread)' : 'var(--paper-sunken)',
      border: `1.5px solid ${on ? 'var(--thread)' : 'var(--paper-edge)'}`,
      position: 'relative',
      flexShrink: 0,
      transition: 'background var(--dur-slow) var(--ease-quiet), border-color var(--dur-slow) var(--ease-quiet)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      insetInlineStart: on ? 22 : 2,
      width: 18,
      height: 18,
      borderRadius: 999,
      background: 'var(--paper)',
      transition: 'inset-inline-start var(--dur-slow) var(--ease-material)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * NASJ Dialog — a leaf of paper laid over a dimmed reading room. Enters by
 * fade + slow rise; no bounce. Backdrop is ink at low opacity, no blur bloom.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  actions,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(30,27,24,0.44)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'nasjFade var(--dur-slow) var(--ease-quiet)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--paper-edge)',
      borderTop: '2px solid var(--thread)',
      borderRadius: 'var(--radius-sm)',
      width: 'min(520px, calc(100vw - 48px))',
      padding: 'var(--space-4)',
      animation: 'nasjRise var(--dur-slow) var(--ease-material)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--ink-soft)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      gap: 'var(--space-2)',
      justifyContent: 'flex-start'
    }
  }, actions)), /*#__PURE__*/React.createElement("style", null, `@keyframes nasjFade{from{opacity:0}to{opacity:1}}@keyframes nasjRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** NASJ Tooltip — a quiet whispered note on hover; fades in slowly, no arrow bloom. */
function Tooltip({
  label,
  side = 'top',
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos[side],
      whiteSpace: 'nowrap',
      zIndex: 50,
      background: 'var(--ink)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transform: `${pos[side].transform} translateY(${show ? 0 : side === 'top' ? 4 : -4}px)`,
      transition: 'opacity var(--dur-quick) var(--ease-quiet), transform var(--dur-quick) var(--ease-material)',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * NASJ Tabs — section switcher read as tabbed dividers. The active tab is
 * underlined by a thread that slides slowly. RTL.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(value ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const select = v => {
    if (!onChange) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      borderBottom: '1px solid var(--paper-edge)',
      ...style
    }
  }, tabs.map(t => {
    const val = t.value ?? t;
    const lab = t.label ?? t;
    const on = active === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(val),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 17,
        fontWeight: on ? 600 : 400,
        color: on ? 'var(--ink)' : 'var(--ink-soft)',
        padding: '10px 2px',
        position: 'relative',
        transition: 'color var(--dur-quick) var(--ease-quiet)'
      }
    }, lab, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        insetInline: 0,
        bottom: -1,
        height: 2,
        background: 'var(--thread)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'right',
        transition: 'transform var(--dur-slow) var(--ease-material)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Annotation = __ds_scope.Annotation;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.ThreadDivider = __ds_scope.ThreadDivider;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
