<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link rel="preconnect" href="https://renexmoe.vercel.app" />
<meta charset="utf-8" />
<link
  rel="shortcut icon"
  href="<!--base_path-->favicon.ico"
  type="image/x-icon"
/>
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"
/>
<title><!--Title--></title>
<meta name="description" content="A Onemanager-PHP site with Theme-renexmoe" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/css/app.css"><meta name="theme-color" content="#fff" />
<!--BackgroundStart-->
<style>
  body {
    --bg: url("<!--BackgroundUrl-->");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-image: var(--bg);
  }

  .mdui-shadow-3 {
    background: rgba(0, 0, 0, 0.4);
  }
</style>
<script>
  window.disableddarkmode = false;
</script>
<!--BackgroundEnd-->

  </head>
  <body
    class="mdui-appbar-with-toolbar mdui-theme-layout-auto mdui-loaded mdui-theme-primary-grey mdui-theme-accent-teal mdui-theme-layout-dark"
  >
    <header
  class="mdui-appbar mdui-appbar-fixed mdui-shadow-0 mdui-appbar-scroll-toolbar-hide"
>
  <div class="mdui-toolbar">
  <span
    class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
    mdui-tooltip="{content: '選單'}"
    onclick='mdui.$("body").toggleClass("mdui-drawer-body-left");'
    id="toggle-drawer"
    ><i class="mdui-icon material-icons">menu</i></span
  >
  <a
    mdui-tooltip="{content: '返回'}"
    class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white mdui-hidden-sm-up"
    onclick="window.history.back()"
  >
    <i class="mdui-icon material-icons">arrow_back</i>
  </a>
  <a href="<!--base_path-->" class="mdui-typo-headline">
    <!--Sitename-->
  </a>
  <!--PathArrayStart-->
  <i class="mdui-icon material-icons mdui-hidden-xs" style="margin: 0"
    >chevron_right</i
  ><a href="<!--PathArrayLink-->" class="mdui-typo-subheading mdui-hidden-xs">
    <!--PathArrayName--></a
  >
  <!--PathArrayEnd-->
  <div class="mdui-toolbar-spacer"></div>
  <!--AdminStart--><a
    href="javascript:;"
    class="mdui-btn mdui-btn-icon mdui-ripple mdui-hidden-sm-up refresh"
    mdui-tooltip="{content: '刷新快取'}"
    ><i class="mdui-icon material-icons">refresh</i></a
  >
  <!--AdminEnd-->
</div>

</header>

    <div class="mdui-drawer mdui-drawer-close" id="main-drawer">
  <div class="mdui-list" mdui-collapse="{accordion: true}">
    <!--LoginStart-->
<li
  class="mdui-list-item mdui-ripple"
  href="javascript:void(0);"
  mdui-dialog="{target: '#login_input'}"
>
  <a class="mdui-list-item-icon mdui-icon material-icons">account_circle</a
  ><a class="mdui-list-item-content">登錄</a>
</li>
<!--LoginEnd-->
<!--AdminStart-->
<li class="mdui-list-item mdui-ripple" href="?setup">
  <a class="mdui-list-item-icon mdui-icon material-icons" href="?setup"
    >account_circle</a
  ><a class="mdui-list-item-content" href="?setup">管理</a>
</li>
<li class="mdui-list-item mdui-ripple" href="?RefreshCache">
  <a class="mdui-list-item-icon mdui-icon material-icons" href="?RefreshCache"
    >refresh</a
  ><a class="mdui-list-item-content" href="?RefreshCache">刷新快取</a>
</li>
<li
  class="mdui-list-item mdui-ripple"
  onclick="document.cookie=``;window.location.reload();"
  id="logout"
>
  <i class="mdui-icon material-icons mdui-list-item-icon">exit_to_app</i>
  <div class="mdui-list-item-content">退出登錄</div>
</li>
<li class="mdui-list-item mdui-ripple" id="checkupdate">
  <i class="mdui-icon material-icons mdui-list-item-icon">update</i>
  <div class="mdui-list-item-content">檢查主題更新</div>
</li>
<div class="mdui-divider"></div>
<!--AdminEnd-->

    <li
      class="mdui-list-item mdui-ripple"
      href="javascript:void(0);"
      onclick="renexmoe.toggle_theme();"
    >
      <a class="mdui-list-item-icon mdui-icon material-icons">brightness_4</a
      ><a class="mdui-list-item-content">深色模式</a>
    </li>
    <li class="mdui-list-item mdui-ripple">
      <a
        href="<!--base_path-->"
        class="mdui-list-item-icon mdui-icon material-icons"
        >home</a
      ><a href="<!--base_path-->" class="mdui-list-item-content">
        <!--constStr@Home--></a
      >
    </li>
    <!--MultiDiskAreaStart-->
<div class="mdui-divider"></div>
<!--MultiDisksStart--><a
  href="<!--MultiDisksUrl-->"
  class="mdui-list-item mdui-ripple"
  ><i class="mdui-list-item-icon mdui-icon material-icons">cloud</i>
  <div class="mdui-list-item-content">
    <!--MultiDisksName-->
  </div>
</a>
<!--MultiDisksEnd-->
<div class="mdui-divider"></div>
<!--MultiDiskAreaEnd-->

    <a
      href="https://github.com/qkqpttgf/OneManager-php"
      class="mdui-list-item mdui-ripple"
      ><i class="mdui-list-item-icon mdui-icon material-icons">code</i>
      <div class="mdui-list-item-content">Github</div>
    </a>
    <li
      class="mdui-list-item mdui-ripple"
      href="javascript:void(0);"
      id="about_theme"
    >
      <i class="mdui-list-item-icon mdui-icon material-icons">info</i>
      <div class="mdui-list-item-content">關於該主題</div>
    </li>
  </div>
</div>

    <div class="mdui-container">
  <ul class="mdui-menu" id="admin-menu">
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple back"
      ><i class="mdui-menu-item-icon mdui-icon material-icons">arrow_back</i
      >返回上一頁</a
    >
  </li>
  <!--AdminStart-->
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple refresh"
      ><i class="mdui-menu-item-icon mdui-icon material-icons">refresh</i
      >刷新緩存</a
    >
  </li>
  <!--AdminEnd-->
</ul>
<i id="mouseplace" style="position: absolute"></i>
<form action="?admin" method="post">
  <div class="mdui-dialog" id="login_input">
    <div class="mdui-dialog-title mdui-text-color-accent">登錄</div>
    <div class="mdui-dialog-content" style="height: 108px">
      <div class="mdui-textfield mdui-textfield-floating-label">
        <i class="mdui-icon material-icons mdui-text-color-theme">lock</i
        ><label class="mdui-textfield-label mdui-text-color-accent">密碼</label
        ><input class="mdui-textfield-input " name="password1" type="new-password" />
      </div>
    </div>
    <div class="mdui-dialog-actions">
      <button class="mdui-btn mdui-ripple mdui-text-color-accent-a100" mdui-dialog-close="">取消</button
      ><button class="mdui-btn mdui-ripple mdui-text-color-accent-a100" type="submit" value="登錄">
        登錄
      </button>
    </div>
  </div>
</form>
 <!--EncryptedStart-->
<div class="mdui-col-md-6 mdui-col-offset-md-3">
  <br /><br /><br />
  <center>
    <div class="mdui-typo-title mdui-text-color-theme-300">
      此資料夾已被加密，請輸入密碼查看。
    </div>
  </center>
  <form action="" method="post">
    <div class="mdui-textfield mdui-textfield-floating-label">
      <i class="mdui-icon material-icons">https</i
      ><label class="mdui-textfield-label"> <!--constStr@InputPassword--></label
      ><input name="password1" class="mdui-textfield-input" type="password" />
    </div>
    <br /><button
      type="submit"
      class="mdui-center mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme"
    >
      <i class="mdui-icon material-icons">fingerprint</i>
      <!--constStr@Submit-->
    </button>
  </form>
</div>
<!--EncryptedEnd-->

  <!--IsFolderStart-->
<!--HeadomfStart-->
<div class="mdui-typo mdui-shadow-3" style="padding: 20px; margin: 20px 0">
  <!--HeadomfContent-->
</div>
<!--HeadomfEnd-->
<!--HeadmdStart-->
<div
  class="mdui-typo mdui-shadow-3 markdown"
  style="padding: 20px; margin: 20px 0"
  id="head"
>
</div>
<script type="text/javascript">
  var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);
    document.write(html);
    console.log(html);
</script>
<!--HeadmdEnd-->
<!--MdRequireStart-->
<link rel="stylesheet" href="//unpkg.zhimg.com/github-markdown-css@3.0.1/github-markdown.css">
<script type="text/javascript" src="//unpkg.zhimg.com/marked@0.6.2/marked.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js"></script>
<!--MdRequireEnd-->

<div
  class="mdui-row mdui-shadow-3"
  style="padding: 5px; margin: 20px 0; border-radius: 8px"
>
  <ul class="mdui-list">
    <li class="mdui-list-item mdui-ripple">
      <div class="mdui-row mdui-col-xs-12">
        <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-color-theme-200">
          <!--constStr@File--><i
            class="mdui-icon material-icons icon-sort mdui-text-color-theme-200"
            data-sort="name"
            data-order="downward"
            >expand_more</i
          >
        </div>
        <div class="mdui-col-sm-3 mdui-text-right mdui-text-color-theme-200">
          <!--constStr@EditTime--><i
            class="mdui-icon material-icons icon-sort mdui-text-color-theme-200"
            data-sort="date"
            data-order="downward"
            >expand_more</i
          >
        </div>
        <div class="mdui-col-sm-2 mdui-text-right mdui-text-color-theme-200">
          <!--constStr@Size--><i
            class="mdui-icon material-icons icon-sort mdui-text-color-theme-200"
            data-sort="size"
            data-order="downward"
            >expand_more</i
          >
        </div>
      </div>
    </li>
    <!--BackArrowStart-->
    <li class="mdui-list-item mdui-ripple">
      <div class="mdui-row mdui-col-sm-12">
        <a href="<!--BackArrowUrl-->">
          <div class="mdui-col-xs-7">
            <i class="mdui-icon material-icons">arrow_upward</i>
          </div>
          <div class="mdui-col-xs-3 mdui-text-right"></div>
          <div class="mdui-col-xs-2 mdui-text-right"></div>
        </a>
      </div>
    </li>
    <!--BackArrowEnd-->
    <!--FolderListStart-->
<li
  class="mdui-list-item mdui-ripple"
  data-sort
  data-sort-name="<!--FileEncodeReplaceName-->"
  data-sort-date="<!--lastModifiedDateTime-->"
  data-sort-size="<!--size-->"
  style="padding-right: 36px"
>
  <div class="mdui-row mdui-col-sm-12">
    <a href="<!--FileEncodeReplaceUrl-->/">
      <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-color-theme-300 mdui-text-truncate">
        <i class="mdui-icon material-icons">folder_open</i
        ><span> <!--FileEncodeReplaceName--></span>
      </div>
      <div class="mdui-col-sm-3 mdui-text-color-theme-300 mdui-text-right">
        <!--lastModifiedDateTime-->
      </div>
      <div class="mdui-col-sm-2 mdui-text-color-theme-300 mdui-text-right">
        <!--size-->
      </div>
    </a>
  </div>
</li>
<!--FolderListEnd-->
 <!--FileListStart-->
<li
  class="mdui-list-item file mdui-ripple"
  data-sort
  data-sort-name="<!--FileEncodeReplaceName-->"
  data-sort-date="<!--lastModifiedDateTime-->"
  data-sort-size="<!--size-->"
  data-readypreview="<!--FileExt-->"
>
  <div class="mdui-row mdui-col-sm-12">
    <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-color-theme-300 mdui-text-truncate">
      <a
        class="<!--FileExtType-->"
        data-name="<!--FileEncodeReplaceName-->"
        href="<!--FileEncodeReplaceUrl-->?preview"
        aria-label="File"
      >
        <i class="mdui-icon material-icons"> <!--IconValue--></i>
        <span> <!--FileEncodeReplaceName--></span>
      </a>
    </div>
    <div class="mdui-col-sm-3 mdui-text-color-theme-300 mdui-text-right">
      <!--lastModifiedDateTime-->
    </div>
    <div class="mdui-col-sm-2 mdui-text-color-theme-300 mdui-text-right">
      <!--size-->
    </div>
  </div>
  <div class="forcedownload mdui-text-color-theme-300 mdui-text-right">
    <a
      title="<!--constStr@Download-->"
      aria-label="Download"
      href="<!--FileEncodeReplaceUrl-->"
      target="_blank"
      ><button class="mdui-btn mdui-ripple mdui-btn-icon">
        <i class="mdui-icon material-icons">file_download</i>
      </button></a
    >
  </div>
</li>
<!--FileListEnd-->

  </ul>
</div>
<!--ReadmemdStart-->
<div
  class="mdui-typo mdui-shadow-3 markdown"
  style="padding: 20px; margin: 20px 0"
  id="readme"
>
<!--ReadmemdContent-->
</div>
<!--ReadmemdEnd-->
<!--FootomfStart-->
<div class="mdui-typo mdui-shadow-3" style="padding: 20px; margin: 20px 0">
  <!--FootomfContent-->
</div>
<!--FootomfEnd-->

<!--IsFolderEnd-->
 <!--IsFileStart-->
<div id="file" class="mdui-shadow-3 mdui-text-color-theme-200" style="padding: 5px;margin: 20px 0px;padding: 20px;border-radius: 8px;">
  <!--IsimgFileStart-->
<img class="mdui-img-fluid mdui-center mdui-m-t-5" src="<!--FileDownUrl-->" />
<br><div class="mdui-textfield">
    <label class="mdui-textfield-label mdui-text-color-theme-accent">下載網址</label>
    <input class="mdui-textfield-input mdui-text-color-theme-300" type="text" value="<!--FileDownUrl-->"/>
  </div>
  <div class="mdui-textfield">
    <label class="mdui-textfield-label mdui-text-color-theme-accent">HTML 引用網址</label>
    <textarea class="mdui-textfield-input mdui-text-color-theme-300"><img src="<!--FileDownUrl-->" /></textarea>
  </div>
  <div class="mdui-textfield">
    <label class="mdui-textfield-label mdui-text-color-theme-accent">Markdown 引用網址</label>
    <input class="mdui-textfield-input mdui-text-color-theme-300" type="text" value="![](<!--FileDownUrl-->)"/>
  </div>
<!--IsimgFileEnd-->
 <!--IsmusicFileStart-->
<audio
  class="mdui-center"
  src="<!--FileDownUrl-->"
  controls
  autoplay
  style="width: 100%; margin-top: 10%"
></audio>
<!--IsmusicFileEnd-->

  <!--IsvideoFileStart-->
<div class="mdui-container-fluid">
  <br>
<video class="mdui-video-fluid mdui-center" preload controls style="margin-top: 20px">
  <source src="<!--FileDownUrl-->" />
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="<!--FileDownUrl-->">link to the video</a> instead.
  </p>
  javascript:file_video("<!--FileDownUrl-->")
</video>
<script>
  var baseUrl = window.location.origin;
  var url = `${baseUrl}<!--FileDownUrl-->`
  let player_items = [
    {
      text: 'PotPlayer',
      href: `potplayer://${url}`
    },
    {
      text: 'IINA',
      href: `iina://weblink?url=${url}`
    },
    {
      text: 'VLC',
      href: `vlc://${url}`,
    }
  ]
    .map(it => `<li class="mdui-menu-item"><a href="${it.href}" class="mdui-ripple">${it.text}</a></li>`)
    .join('');
  player_items += `<li class="mdui-divider"></li>
                   <li class="mdui-menu-item"><a id="copy-link" class="mdui-ripple" onclick="CopyToClipboard()">複製鏈接</a></li>`;
  const playBtn = `
      <button class="mdui-btn mdui-ripple mdui-color-theme-accent" mdui-menu="{target:'#player-items'}">
        <i class="mdui-icon material-icons">&#xe039;</i>外部播放器播放<i class="mdui-icon material-icons">&#xe5cf;</i>
      </button>
      <ul class="mdui-menu" id="player-items">${player_items}</ul>`;
  const content = `
  <br>${playBtn}
  <!-- 固定標籤 -->
  <div class="mdui-textfield">
    <label class="mdui-textfield-label mdui-text-color-theme-accent">下載網址</label>
    <input class="mdui-textfield-input mdui-text-color-theme-300" type="text" value="${url}"/>
  </div>
  <div class="mdui-textfield">
    <label class="mdui-textfield-label mdui-text-color-theme-accent">HTML 引用網址</label>
    <textarea class="mdui-textfield-input mdui-text-color-theme-300"><video><source src="${url}" type="video/mp4"></video></textarea>
  </div>`;
  document.write(content);
  function CopyToClipboard() {
    navigator.clipboard.writeText(url).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
    mdui.snackbar('已複製到剪貼簿!');
  }
</script>
</div>

<!--IsvideoFileEnd-->
 <!--IsofficeFileStart-->
<iframe
  id="office-a"
  src="https://view.officeapps.live.com/op/view.aspx?src=<!--FileEncodeDownUrl-->"
  style="width: 100%; height: 800px"
  frameborder="0"
></iframe>
<!--IsofficeFileEnd-->

  <!--IspdfFileStart-->
<embed src="<!--FileEncodeReplaceUrl-->" type="application/pdf">
<!--IspdfFileEnd-->
 <!--IstxtFileStart-->
<pre
  id="editor"
  style="
    white-space: pre-wrap;
    font-family: JetBrains Mono, Fira Code, Sarasa Mono SC, Cascadia Code, Menlo,
      Consolas, monaco, Noto Sans SC;
  "
><code id="code"><!--TxtContent--></code></pre>
<script>
  document.querySelector("#admin-menu").innerHTML +=
    '<li class="mdui-menu-item"><a href="javascript:void(0);"class="mdui-ripple highlight"><i class="mdui-menu-item-icon mdui-icon material-icons">style</i>markdown解析</a></li>';
  document.querySelector(
    ".mdui-toolbar"
  ).innerHTML += `<a href="javascript:;" class="mdui-btn mdui-btn-icon mdui-ripple mdui-hidden-sm-up highlight" mdui-tooltip="{content: 'markdown解析'}"><i class="mdui-icon material-icons">style</i></a>`;
</script>

<!--IstxtFileEnd-->

  <!--IsOtherFileStart-->
  <!--constStr@FileNotSupport-->
  <!--IsOtherFileEnd-->
</div>
<a
  href="<!--FileEncodeReplaceUrl-->"
  target="_blank"
  class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"
  ><i class="mdui-icon material-icons">file_download</i></a
>
<script>
  document.querySelector("#admin-menu").innerHTML +=
    '<li class="mdui-menu-item"><a href="javascript:void(0);"class="mdui-ripple downloadurl"><i class="mdui-menu-item-icon mdui-icon material-icons">cloud_download</i>下載連結</a></li>';
  document.querySelector(
    ".mdui-toolbar"
  ).innerHTML += `<a href="javascript:;" class="mdui-btn mdui-btn-icon mdui-ripple mdui-hidden-sm-up downloadurl" mdui-tooltip="{content: '下載連結'}"><i class="mdui-icon material-icons">cloud_download</i></a>`;
</script>
<!--IsFileEnd-->

</div>

  </body>
  <!--IconValuesStart-->
  { "music":"audiotrack", "video":"ondemand_video", "img":"image",
  "pdf":"picture_as_pdf", "default":"insert_drive_file"}
  <!--IconValuesEnd-->
  <script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/0.978007d64c899be136cc.js"></script><script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/1.5b8d70d2354fb2d7a285.js"></script><script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/2.328efe38d29b2b82081d.js"></script><script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/3.027761c2de2783cf8bdb.js"></script><script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/4.dab60f097b53c4c190ca.js"></script><script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/5.34aa35af2591e1864a76.js"></script><script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/app~493df0b3.fd6ababc1af361957434.js"></script><script src="https://cdn.jsdelivr.net/gh/186526/renexmoe-cdn@v1.1.3/js/webpack-runtime.2de41aaefaaa86cdb95e.js"></script>
</html>
