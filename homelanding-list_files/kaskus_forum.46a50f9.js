var messageData,STATE_NEW="new",STATE_EXIST="exist",element=document.getElementById("podcastGlobalWidgetContainer"),messageDataEpisodeFlag=0,firstLoad=!0,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),expanded=!1,standardHeight=IS_WEB?40:50,hasUserInteraction=!1,globalFrameId="podcast-global-iframe";function commandGlobalWidget(e){var a=$("#"+globalFrameId);void 0!==a[0]&&a[0].contentWindow.postMessage(e,"*")}function commandThreadWidget(e,a){var t=$("#"+e);void 0!==t&&(resetAllFramePlayIcon(),t[0].contentWindow.postMessage(a,"*"))}function expandGlobalWIdget(){var e=messageData.episodeListHeight+standardHeight;expanded?$("#"+globalFrameId).attr("height",standardHeight+"px"):$("#"+globalFrameId).attr("height",e+"px"),expanded=!expanded}function firstLoadGlobalWidget(e,a,t){var d=document.createElement("iframe");IS_WEB?(1==onTop?d.setAttribute("class","jsPodcastWidgetHeaderIframe podcastWidgetHeaderIframe Pos(a) T(0) Start(0) W(65px)--md H(38px)--md"):d.setAttribute("class","jsPodcastWidgetHeaderIframe podcastWidgetHeaderIframe is-scrolled Pos(f) T(50px) W(65px)--md H(38px)--md"),d.setAttribute("width","280px")):(d.setAttribute("width","100%"),d.setAttribute("class","jsPodcastWidgetHeaderIframe podcastWidgetHeaderIframe")),d.setAttribute("frameborder",0),d.setAttribute("scrolling","no"),d.setAttribute("allow","autoplay"),d.setAttribute("data-id",a),d.setAttribute("id",e),d.setAttribute("height",standardHeight),d.style.overflow="hidden",d.src=t,element.appendChild(d)}function playFromEmbedWidget(){var e=0,a="podcast-thread-iframe-";messageData.isProgram?(void 0!==messageData.currentEpisodeIndex&&(e=messageData.currentEpisodeIndex),episode=messageData.episodes[e],a+=messageData.programUrl):messageData.isEpisode&&(episode=messageData.episodes[0],a+=episode.id);var t=episode.id;postMessageData={command:"hit_play_button",threadFrameId:a,seek:0},messageData.threadDetail&&(postMessageData.threadDetail=messageData.threadDetail);var d=KASKUS_PODCAST_URL+"/kaskus_widget/"+episode.author+"/episode/"+episode.id+"?embed=true&global_widget=true&autoplay=true&from_thread=true&channel_id="+CHANNEL_ID;IS_WEB||(d+="&wap=true",nightmode&&(d+="&nightmode=1"));var o=Cookies.get("podcast_current_time");firstLoad&&void 0!==o&&(postMessageData.seek=o),firstLoad||$("#"+globalFrameId).attr("data-id")!=t?($("#"+globalFrameId).attr("data-id",t),$("#"+globalFrameId).attr("height",standardHeight+"px"),$("#"+globalFrameId).attr("src",d),resetAllFramePlayIcon(),$("#"+globalFrameId).on("load",function(){commandGlobalWidget(postMessageData),$("#"+globalFrameId).off("load")}),$("#podcastGlobalWidgetContainer").removeClass("D(n)"),expanded=!1,firstLoad=!1):($("#podcastGlobalWidgetContainer").removeClass("D(n)"),commandGlobalWidget(postMessageData))}function resetAllFramePlayIcon(){var e={command:"toggle_embed_play_icon",flag:!1,resetProgram:!1};$(".iframe-podcast-episode").each(function(){void 0!==$(this)[0].contentWindow&&$(this)[0].contentWindow.postMessage(e,"*")}),$(".iframe-podcast-program").each(function(){void 0!==$(this)[0].contentWindow&&$(this)[0].contentWindow.postMessage(e,"*")})}function showIframeGlobalWidget(){hasUserInteraction=messageData.userInteraction,messageData.userInteraction?($("#"+globalFrameId).addClass("is-sticky"),"undefined"!=typeof scrollHeaderSticky&&scrollHeaderSticky(),IS_WEB||$(".jsPodcastWidgetAnchor").show()):$("#"+globalFrameId).removeClass("is-sticky")}function toggleEmbedPlayIcon(){commandThreadWidget(messageData.threadFrameId,messageData)}function controlPodcastWidget(e){if(e.origin==KASKUS_PODCAST_URL)switch((messageData=e.data).command){case"play_from_embed_widget":playFromEmbedWidget();break;case"toggle_embed_play_icon":toggleEmbedPlayIcon();break;case"expand_global_widget":expandGlobalWIdget();break;case"show_global_widget":showIframeGlobalWidget()}}$(document).ready(function(){var e,a=Cookies.get("podcast_play_status"),t=Cookies.get("podcast_episode"),d=Cookies.get("podcast_author"),o=Cookies.get("podcast_current_time"),s="";void 0!==a?("play"==a?s="&autoplay=true":"pause"==a&&(s="&autoplay=false"),e=KASKUS_PODCAST_URL+"/kaskus_widget/"+d+"/episode/"+t+"?embed=true&global_widget=true"+s+"&seek="+o+"&channel_id="+CHANNEL_ID):e=KASKUS_PODCAST_URL+"/kaskus_widget?embed=true&global_widget=true&from_thread=false&channel_id="+CHANNEL_ID,IS_WEB||(e+="&wap=true",nightmode&&(e+="&nightmode=1")),firstLoadGlobalWidget(globalFrameId,t,e),$("#podcastGlobalWidgetContainer").removeClass("D(n)")}),window.addEventListener("message",controlPodcastWidget,!1);