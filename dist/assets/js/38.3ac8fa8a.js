(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{225:function(e,t,v){"use strict";v.r(t);var _=v(0),o=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("使用"),v("code",[e._v("react-native")]),e._v(" 的时候需要播放音频文件，百度后发现了一个叫"),v("code",[e._v("react-native-sound")]),e._v("的第三方库。")]),e._v(" "),v("p",[e._v("在使用的过程中发现一个"),v("code",[e._v("wav")]),e._v(" 的文件无法播放。最初以为是代码问题，去照搬了官方的demo后还是不行，但播放其他"),v("code",[e._v("wav")]),e._v(" 文件是成功的。")]),e._v(" "),v("p",[e._v("根据打出的错误"),v("code",[e._v('{"extra":-2147483648,"what": 1}')]),e._v(" 查了一下，发现是"),v("code",[e._v("android.media.MediaPlayer")]),e._v(" 抛出的异常。"),v("code",[e._v("what 1")]),e._v("指的是错误"),v("code",[e._v("MEDIA_INFO_UNKNOWN")]),e._v("。继续查下去，发现问题原因是安卓机器不支持该文件的编码格式，猜测需要做一下格式转换，转换成一个mp3文件后播放成功。")])])}),[],!1,null,null,null);t.default=o.exports}}]);