





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d514f0f4cce26123a0bd5717d033adc4138d2033750224d5716f9e939d3b3aa6.css" integrity="sha256-1RTw9MziYSOgvVcX0DOtxBONIDN1AiTVcW+ek507OqY=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f886e4c2d166bd2750de4f941f1f14b0658f60e7cf5a680a5926b1c2fb1f5252.css" integrity="sha256-+IbkwtFmvSdQ3k+UHx8UsGWPYOfPWmgKWSaxwvsfUlI=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-b29e324b8fafaead965049ef224818ef0dccc7384b5cfcad56a56a89c33a9438.css" integrity="sha256-sp4yS4+vrq2WUEnvIkgY7w3MxzhLXPytVqVqicM6lDg=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>foundation-sites/foundation.core.js at develop · zurb/foundation-sites · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/156122?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="zurb/foundation-sites" property="og:title" /><meta content="https://github.com/zurb/foundation-sites" property="og:url" /><meta content="foundation-sites - The most advanced responsive front-end framework in the world. Quickly create prototypes and production code for sites that work on any kind of device." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="F73F:13563:1DC696E:2FAB2D3:58C975AE" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F73F:13563:1DC696E:2FAB2D3:58C975AE" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  
  
      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MDA2OWQzN2VjMzM2Y2M1ZjEyMDg5NzE5MzM3MDFkYmFmN2RlYWEzMTUzNTRmNjIzZmMzZDM5NTc2ZThhMjc3ZXx7InJlbW90ZV9hZGRyZXNzIjoiMTMwLjIyOS40OC4yMTUiLCJyZXF1ZXN0X2lkIjoiRjczRjoxMzU2MzoxREM2OTZFOjJGQUIyRDM6NThDOTc1QUUiLCJ0aW1lc3RhbXAiOjE0ODk1OTc4NzAsImhvc3QiOiJnaXRodWIuY29tIn0=">


  <meta name="html-safe-nonce" content="05880d35de50d907ae3331d8fcaf85bd80f07514">

  <meta http-equiv="x-pjax-version" content="0318db5f04fdb0550eea893ff40a1c5b">
  

    
  <meta name="description" content="foundation-sites - The most advanced responsive front-end framework in the world. Quickly create prototypes and production code for sites that work on any kind of device.">
  <meta name="go-import" content="github.com/zurb/foundation-sites git https://github.com/zurb/foundation-sites.git">

  <meta content="156122" name="octolytics-dimension-user_id" /><meta content="zurb" name="octolytics-dimension-user_login" /><meta content="2573058" name="octolytics-dimension-repository_id" /><meta content="zurb/foundation-sites" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2573058" name="octolytics-dimension-repository_network_root_id" /><meta content="zurb/foundation-sites" name="octolytics-dimension-repository_network_root_nwo" />
      <link href="https://github.com/zurb/foundation-sites/commits/develop.atom" rel="alternate" title="Recent Commits to foundation-sites:develop" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/zurb/foundation-sites/blob/develop/js/foundation.core.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-out env-production emoji-size-boost page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zurb/foundation-sites/search" class="js-site-search-form" data-scoped-search-url="/zurb/foundation-sites/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Fzurb%2Ffoundation-sites%2Fblob%2Fdevelop%2Fjs%2Ffoundation.core.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">


    <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fzurb%2Ffoundation-sites"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/zurb/foundation-sites/watchers"
     aria-label="1496 users are watching this repository">
    1,496
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fzurb%2Ffoundation-sites"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/zurb/foundation-sites/stargazers"
      aria-label="25102 users starred this repository">
      25,102
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fzurb%2Ffoundation-sites"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/zurb/foundation-sites/network" class="social-count"
       aria-label="5492 users forked this repository">
      5,492
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/zurb" class="url fn" rel="author">zurb</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/zurb/foundation-sites" data-pjax="#js-repo-pjax-container">foundation-sites</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/zurb/foundation-sites" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /zurb/foundation-sites" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/zurb/foundation-sites/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /zurb/foundation-sites/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">425</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/zurb/foundation-sites/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /zurb/foundation-sites/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">65</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/zurb/foundation-sites/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /zurb/foundation-sites/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">1</span>
</a>
    <a href="/zurb/foundation-sites/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /zurb/foundation-sites/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/zurb/foundation-sites/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /zurb/foundation-sites/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/zurb/foundation-sites/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /zurb/foundation-sites/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/zurb/foundation-sites/blob/7507694312fd4939ea7186b5253ff76947f5d164/js/foundation.core.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:2baad163931fbbbc6b81a0ba6aeaa8e9 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">develop</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/Frame-Grid/js/foundation.core.js"
               data-name="Frame-Grid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                Frame-Grid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS7458-reveal-animation-speed/js/foundation.core.js"
               data-name="IS7458-reveal-animation-speed"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS7458-reveal-animation-speed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS7815-orbit-resize/js/foundation.core.js"
               data-name="IS7815-orbit-resize"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS7815-orbit-resize
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS8300-click-open-not-being-respected/js/foundation.core.js"
               data-name="IS8300-click-open-not-being-respected"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS8300-click-open-not-being-respected
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS8335-handle-arrays-with-extended-prototypes/js/foundation.core.js"
               data-name="IS8335-handle-arrays-with-extended-prototypes"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS8335-handle-arrays-with-extended-prototypes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS8846-slider-fix-initial-start-fill-calc/js/foundation.core.js"
               data-name="IS8846-slider-fix-initial-start-fill-calc"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS8846-slider-fix-initial-start-fill-calc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS8952-pass-content-on-tab-events/js/foundation.core.js"
               data-name="IS8952-pass-content-on-tab-events"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS8952-pass-content-on-tab-events
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS9103-prevent-motionui-on-hidden-orbit/js/foundation.core.js"
               data-name="IS9103-prevent-motionui-on-hidden-orbit"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS9103-prevent-motionui-on-hidden-orbit
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS9291-fix-reveal-race-with-animations/js/foundation.core.js"
               data-name="IS9291-fix-reveal-race-with-animations"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS9291-fix-reveal-race-with-animations
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS9309-fix-responsive-gutters/js/foundation.core.js"
               data-name="IS9309-fix-responsive-gutters"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS9309-fix-responsive-gutters
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/IS9349-fix-what-input-dependency/js/foundation.core.js"
               data-name="IS9349-fix-what-input-dependency"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                IS9349-fix-what-input-dependency
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/V5/js/foundation.core.js"
               data-name="V5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                V5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/abide-text-validation/js/foundation.core.js"
               data-name="abide-text-validation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                abide-text-validation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/accessible-colors/js/foundation.core.js"
               data-name="accessible-colors"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                accessible-colors
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/accordion-menu-keyboard/js/foundation.core.js"
               data-name="accordion-menu-keyboard"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                accordion-menu-keyboard
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/accordion-submenu-toggle/js/foundation.core.js"
               data-name="accordion-submenu-toggle"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                accordion-submenu-toggle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/add-deeplink-test-to-responsive-accordion-tabs/js/foundation.core.js"
               data-name="add-deeplink-test-to-responsive-accordion-tabs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                add-deeplink-test-to-responsive-accordion-tabs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/add-mutation-observers-to-sliders/js/foundation.core.js"
               data-name="add-mutation-observers-to-sliders"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                add-mutation-observers-to-sliders
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/apps-grid/js/foundation.core.js"
               data-name="apps-grid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                apps-grid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/better-encapsulation-for-triggers-module/js/foundation.core.js"
               data-name="better-encapsulation-for-triggers-module"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                better-encapsulation-for-triggers-module
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/brettsmason-drilldown-visual-test/js/foundation.core.js"
               data-name="brettsmason-drilldown-visual-test"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                brettsmason-drilldown-visual-test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/briantan888-patch-1/js/foundation.core.js"
               data-name="briantan888-patch-1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                briantan888-patch-1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/briantan888-patch-2/js/foundation.core.js"
               data-name="briantan888-patch-2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                briantan888-patch-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/briantan888-patch-3/js/foundation.core.js"
               data-name="briantan888-patch-3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                briantan888-patch-3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/button-clear/js/foundation.core.js"
               data-name="button-clear"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                button-clear
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/button-hollowfill/js/foundation.core.js"
               data-name="button-hollowfill"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                button-hollowfill
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/buttongroup-flex/js/foundation.core.js"
               data-name="buttongroup-flex"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                buttongroup-flex
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/card-flex/js/foundation.core.js"
               data-name="card-flex"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                card-flex
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/card-flexhelpers/js/foundation.core.js"
               data-name="card-flexhelpers"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                card-flexhelpers
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/card-flexstyles/js/foundation.core.js"
               data-name="card-flexstyles"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                card-flexstyles
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/card-variable-change/js/foundation.core.js"
               data-name="card-variable-change"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                card-variable-change
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/cheatsheet/js/foundation.core.js"
               data-name="cheatsheet"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                cheatsheet
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/css-grid/js/foundation.core.js"
               data-name="css-grid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                css-grid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/customizer/js/foundation.core.js"
               data-name="customizer"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                customizer
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/zurb/foundation-sites/blob/develop/js/foundation.core.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/docs-redesign-nick/js/foundation.core.js"
               data-name="docs-redesign-nick"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                docs-redesign-nick
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/docs-update/js/foundation.core.js"
               data-name="docs-update"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                docs-update
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/drilldown-long-title/js/foundation.core.js"
               data-name="drilldown-long-title"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                drilldown-long-title
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/dropdown-event-descriptions/js/foundation.core.js"
               data-name="dropdown-event-descriptions"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dropdown-event-descriptions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/dropdown-missing-variable-definition/js/foundation.core.js"
               data-name="dropdown-missing-variable-definition"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dropdown-missing-variable-definition
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/dropdown-positioning-and-offsets/js/foundation.core.js"
               data-name="dropdown-positioning-and-offsets"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dropdown-positioning-and-offsets
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-cleanup-issues-found-by-unit-tests/js/foundation.core.js"
               data-name="fix-cleanup-issues-found-by-unit-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-cleanup-issues-found-by-unit-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-deploy-build/js/foundation.core.js"
               data-name="fix-deploy-build"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-deploy-build
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-docs-titles/js/foundation.core.js"
               data-name="fix-docs-titles"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-docs-titles
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-drilldown-event-names/js/foundation.core.js"
               data-name="fix-drilldown-event-names"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-drilldown-event-names
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-drilldown-height-calcualation/js/foundation.core.js"
               data-name="fix-drilldown-height-calcualation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-drilldown-height-calcualation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-drilldown-height-issue/js/foundation.core.js"
               data-name="fix-drilldown-height-issue"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-drilldown-height-issue
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-drilldown-menu-hide-bug/js/foundation.core.js"
               data-name="fix-drilldown-menu-hide-bug"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-drilldown-menu-hide-bug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-dropdown-click-bug/js/foundation.core.js"
               data-name="fix-dropdown-click-bug"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-dropdown-click-bug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-dropdown-keyboard-rtl/js/foundation.core.js"
               data-name="fix-dropdown-keyboard-rtl"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-dropdown-keyboard-rtl
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-global-resize-handler-in-interchange/js/foundation.core.js"
               data-name="fix-global-resize-handler-in-interchange"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-global-resize-handler-in-interchange
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-jquery-dep/js/foundation.core.js"
               data-name="fix-jquery-dep"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-jquery-dep
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-magellan-bug-develop/js/foundation.core.js"
               data-name="fix-magellan-bug-develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-magellan-bug-develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-magellan-bug/js/foundation.core.js"
               data-name="fix-magellan-bug"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-magellan-bug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-off-canvas-resize-reveal/js/foundation.core.js"
               data-name="fix-off-canvas-resize-reveal"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-off-canvas-resize-reveal
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-offcanvas-right-issues/js/foundation.core.js"
               data-name="fix-offcanvas-right-issues"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-offcanvas-right-issues
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-offcanvas-tests/js/foundation.core.js"
               data-name="fix-offcanvas-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-offcanvas-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-opens-left-styling/js/foundation.core.js"
               data-name="fix-opens-left-styling"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-opens-left-styling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-parent-link-drilldown-keyboard/js/foundation.core.js"
               data-name="fix-parent-link-drilldown-keyboard"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-parent-link-drilldown-keyboard
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-reveal-not-respecting-offsets/js/foundation.core.js"
               data-name="fix-reveal-not-respecting-offsets"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-reveal-not-respecting-offsets
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-slider-top-increment/js/foundation.core.js"
               data-name="fix-slider-top-increment"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-slider-top-increment
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-sticky-left-offset/js/foundation.core.js"
               data-name="fix-sticky-left-offset"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-sticky-left-offset
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-tabs-history/js/foundation.core.js"
               data-name="fix-tabs-history"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-tabs-history
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/fix-typo-in-dropdown-menu-docs/js/foundation.core.js"
               data-name="fix-typo-in-dropdown-menu-docs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-typo-in-dropdown-menu-docs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/flexmenu-fix/js/foundation.core.js"
               data-name="flexmenu-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                flexmenu-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/funnel-to-courses/js/foundation.core.js"
               data-name="funnel-to-courses"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                funnel-to-courses
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/gh-pages/js/foundation.core.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/grid-col-pos-center-docs/js/foundation.core.js"
               data-name="grid-col-pos-center-docs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                grid-col-pos-center-docs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/hide-hidden-drilldown-menus-from-tabs/js/foundation.core.js"
               data-name="hide-hidden-drilldown-menus-from-tabs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                hide-hidden-drilldown-menus-from-tabs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/hollow-dropdown-fix/js/foundation.core.js"
               data-name="hollow-dropdown-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                hollow-dropdown-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/isolate-global-references/js/foundation.core.js"
               data-name="isolate-global-references"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                isolate-global-references
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/jquery-3-support/js/foundation.core.js"
               data-name="jquery-3-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                jquery-3-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/make-normalize-dependency-explicit/js/foundation.core.js"
               data-name="make-normalize-dependency-explicit"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                make-normalize-dependency-explicit
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/master/js/foundation.core.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/migration/js/foundation.core.js"
               data-name="migration"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                migration
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/modify-tooltip-to-allow-html/js/foundation.core.js"
               data-name="modify-tooltip-to-allow-html"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                modify-tooltip-to-allow-html
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/move-to-webpack/js/foundation.core.js"
               data-name="move-to-webpack"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                move-to-webpack
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/new-drilldown/js/foundation.core.js"
               data-name="new-drilldown"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                new-drilldown
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/off-canvas-overlay-tweaks/js/foundation.core.js"
               data-name="off-canvas-overlay-tweaks"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                off-canvas-overlay-tweaks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/offcanvas-scrolling-is-9696/js/foundation.core.js"
               data-name="offcanvas-scrolling-is-9696"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                offcanvas-scrolling-is-9696
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/orbit-resize-ie-fix/js/foundation.core.js"
               data-name="orbit-resize-ie-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                orbit-resize-ie-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/pin-down-cachebust-dependency/js/foundation.core.js"
               data-name="pin-down-cachebust-dependency"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                pin-down-cachebust-dependency
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/pr/7683/js/foundation.core.js"
               data-name="pr/7683"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                pr/7683
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/refactor-touch-for-better-encapsulation/js/foundation.core.js"
               data-name="refactor-touch-for-better-encapsulation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                refactor-touch-for-better-encapsulation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/release/6.3.1/js/foundation.core.js"
               data-name="release/6.3.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release/6.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/remove-deprecation-items-of-6.3/js/foundation.core.js"
               data-name="remove-deprecation-items-of-6.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                remove-deprecation-items-of-6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/remove-yeti-launch-references-from-docs/js/foundation.core.js"
               data-name="remove-yeti-launch-references-from-docs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                remove-yeti-launch-references-from-docs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/responsive-toggle-targeting-bug/js/foundation.core.js"
               data-name="responsive-toggle-targeting-bug"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                responsive-toggle-targeting-bug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/reveal-explicit-close/js/foundation.core.js"
               data-name="reveal-explicit-close"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                reveal-explicit-close
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/reveal-ios/js/foundation.core.js"
               data-name="reveal-ios"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                reveal-ios
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/reveal-modal-issues/js/foundation.core.js"
               data-name="reveal-modal-issues"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                reveal-modal-issues
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/reveal-on-android/js/foundation.core.js"
               data-name="reveal-on-android"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                reveal-on-android
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/revert-8192-develop/js/foundation.core.js"
               data-name="revert-8192-develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                revert-8192-develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/revert-9261-offcanvas-tests/js/foundation.core.js"
               data-name="revert-9261-offcanvas-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                revert-9261-offcanvas-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/revert-9283/js/foundation.core.js"
               data-name="revert-9283"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                revert-9283
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/revert-9362-fix-flex-grid/js/foundation.core.js"
               data-name="revert-9362-fix-flex-grid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                revert-9362-fix-flex-grid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/rtl-dropdown-overflow-bug/js/foundation.core.js"
               data-name="rtl-dropdown-overflow-bug"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                rtl-dropdown-overflow-bug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/sethkane-v6.3/js/foundation.core.js"
               data-name="sethkane-v6.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                sethkane-v6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/showcase/js/foundation.core.js"
               data-name="showcase"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                showcase
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/sticky/js/foundation.core.js"
               data-name="sticky"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                sticky
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/support/6.3/js/foundation.core.js"
               data-name="support/6.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                support/6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/test-ncoden-scss-dist/js/foundation.core.js"
               data-name="test-ncoden-scss-dist"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                test-ncoden-scss-dist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/toggle-containers/js/foundation.core.js"
               data-name="toggle-containers"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                toggle-containers
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/top-bar-flex-grid/js/foundation.core.js"
               data-name="top-bar-flex-grid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                top-bar-flex-grid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/update-accordion-item-attributes/js/foundation.core.js"
               data-name="update-accordion-item-attributes"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                update-accordion-item-attributes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/update-resource-paths/js/foundation.core.js"
               data-name="update-resource-paths"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                update-resource-paths
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/v5/js/foundation.core.js"
               data-name="v5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/v6.2.2/js/foundation.core.js"
               data-name="v6.2.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v6.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/v6.2.4-rc1/js/foundation.core.js"
               data-name="v6.2.4-rc1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v6.2.4-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/v6.3/js/foundation.core.js"
               data-name="v6.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/v6.4/js/foundation.core.js"
               data-name="v6.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/vertical-flex-classes/js/foundation.core.js"
               data-name="vertical-flex-classes"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                vertical-flex-classes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/vertical-rhythm/js/foundation.core.js"
               data-name="vertical-rhythm"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                vertical-rhythm
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/wired-live/js/foundation.core.js"
               data-name="wired-live"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                wired-live
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/zurb/foundation-sites/blob/wired16/js/foundation.core.js"
               data-name="wired16"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                wired16
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/vundefined/js/foundation.core.js"
              data-name="vundefined"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="vundefined">
                vundefined
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.3.1/js/foundation.core.js"
              data-name="v6.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.3.1">
                v6.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.3.1-rc1/js/foundation.core.js"
              data-name="v6.3.1-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.3.1-rc1">
                v6.3.1-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.3.0/js/foundation.core.js"
              data-name="v6.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.3.0">
                v6.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.3.0-rc3/js/foundation.core.js"
              data-name="v6.3.0-rc3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.3.0-rc3">
                v6.3.0-rc3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.3.0-rc2/js/foundation.core.js"
              data-name="v6.3.0-rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.3.0-rc2">
                v6.3.0-rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.3.0-rc1/js/foundation.core.js"
              data-name="v6.3.0-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.3.0-rc1">
                v6.3.0-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.3-rc1/js/foundation.core.js"
              data-name="v6.3-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.3-rc1">
                v6.3-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.4/js/foundation.core.js"
              data-name="v6.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.4">
                v6.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.4-rc2/js/foundation.core.js"
              data-name="v6.2.4-rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.4-rc2">
                v6.2.4-rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.4-rc1/js/foundation.core.js"
              data-name="v6.2.4-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.4-rc1">
                v6.2.4-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.3/js/foundation.core.js"
              data-name="v6.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.3">
                v6.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.2/js/foundation.core.js"
              data-name="v6.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.2">
                v6.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.2-rc2/js/foundation.core.js"
              data-name="v6.2.2-rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.2-rc2">
                v6.2.2-rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.2-rc1/js/foundation.core.js"
              data-name="v6.2.2-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.2-rc1">
                v6.2.2-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.1/js/foundation.core.js"
              data-name="v6.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.1">
                v6.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.0/js/foundation.core.js"
              data-name="v6.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.0">
                v6.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.2.0-rc.1/js/foundation.core.js"
              data-name="v6.2.0-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.2.0-rc.1">
                v6.2.0-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.1.2/js/foundation.core.js"
              data-name="v6.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.1.2">
                v6.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.1.1/js/foundation.core.js"
              data-name="v6.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.1.1">
                v6.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.1.0/js/foundation.core.js"
              data-name="v6.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.1.0">
                v6.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.0.6/js/foundation.core.js"
              data-name="v6.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.6">
                v6.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.0.5/js/foundation.core.js"
              data-name="v6.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.5">
                v6.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.0.4/js/foundation.core.js"
              data-name="v6.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.4">
                v6.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.0.3/js/foundation.core.js"
              data-name="v6.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.3">
                v6.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.0.2/js/foundation.core.js"
              data-name="v6.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.2">
                v6.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.0.1/js/foundation.core.js"
              data-name="v6.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.1">
                v6.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v6.0.0/js/foundation.core.js"
              data-name="v6.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.0">
                v6.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.5.3/js/foundation.core.js"
              data-name="v5.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.5.3">
                v5.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.5.2/js/foundation.core.js"
              data-name="v5.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.5.2">
                v5.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.5.1/js/foundation.core.js"
              data-name="v5.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.5.1">
                v5.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.5.0/js/foundation.core.js"
              data-name="v5.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.5.0">
                v5.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4.7/js/foundation.core.js"
              data-name="v5.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4.7">
                v5.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4.6/js/foundation.core.js"
              data-name="v5.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4.6">
                v5.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4.5/js/foundation.core.js"
              data-name="v5.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4.5">
                v5.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4.4/js/foundation.core.js"
              data-name="v5.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4.4">
                v5.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4.3/js/foundation.core.js"
              data-name="v5.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4.3">
                v5.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4.2/js/foundation.core.js"
              data-name="v5.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4.2">
                v5.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4.1/js/foundation.core.js"
              data-name="v5.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4.1">
                v5.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.4/js/foundation.core.js"
              data-name="v5.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.4">
                v5.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.3.3/js/foundation.core.js"
              data-name="v5.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.3.3">
                v5.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.3.2/js/foundation.core.js"
              data-name="v5.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.3.2">
                v5.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.3.1/js/foundation.core.js"
              data-name="v5.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.3.1">
                v5.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.3.0/js/foundation.core.js"
              data-name="v5.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.3.0">
                v5.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.2.3/js/foundation.core.js"
              data-name="v5.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.3">
                v5.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.2.2/js/foundation.core.js"
              data-name="v5.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.2">
                v5.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.2.1/js/foundation.core.js"
              data-name="v5.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.1">
                v5.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.2.0/js/foundation.core.js"
              data-name="v5.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.0">
                v5.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.1.1/js/foundation.core.js"
              data-name="v5.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.1.1">
                v5.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.1.0/js/foundation.core.js"
              data-name="v5.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.1.0">
                v5.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.0.3/js/foundation.core.js"
              data-name="v5.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.3">
                v5.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.0.2/js/foundation.core.js"
              data-name="v5.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.2">
                v5.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.0.1/js/foundation.core.js"
              data-name="v5.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.1">
                v5.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v5.0.0/js/foundation.core.js"
              data-name="v5.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.0">
                v5.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.3.2/js/foundation.core.js"
              data-name="v4.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.2">
                v4.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.3.1/js/foundation.core.js"
              data-name="v4.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.1">
                v4.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.3.0/js/foundation.core.js"
              data-name="v4.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.0">
                v4.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.2.3/js/foundation.core.js"
              data-name="v4.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.3">
                v4.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.2.2/js/foundation.core.js"
              data-name="v4.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.2">
                v4.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.2.1/js/foundation.core.js"
              data-name="v4.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.1">
                v4.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.2.0/js/foundation.core.js"
              data-name="v4.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.0">
                v4.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.1.6/js/foundation.core.js"
              data-name="v4.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.6">
                v4.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.1.5/js/foundation.core.js"
              data-name="v4.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.5">
                v4.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.1.4/js/foundation.core.js"
              data-name="v4.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.4">
                v4.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.1.3/js/foundation.core.js"
              data-name="v4.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.3">
                v4.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.1.2/js/foundation.core.js"
              data-name="v4.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.2">
                v4.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.1.1/js/foundation.core.js"
              data-name="v4.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.1">
                v4.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.1.0/js/foundation.core.js"
              data-name="v4.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.0">
                v4.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.9/js/foundation.core.js"
              data-name="v4.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.9">
                v4.0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.8/js/foundation.core.js"
              data-name="v4.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.8">
                v4.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.7/js/foundation.core.js"
              data-name="v4.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.7">
                v4.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.6/js/foundation.core.js"
              data-name="v4.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.6">
                v4.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.5/js/foundation.core.js"
              data-name="v4.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.5">
                v4.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.4/js/foundation.core.js"
              data-name="v4.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.4">
                v4.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.3/js/foundation.core.js"
              data-name="v4.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.3">
                v4.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.2/js/foundation.core.js"
              data-name="v4.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.2">
                v4.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.1/js/foundation.core.js"
              data-name="v4.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.1">
                v4.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.0/js/foundation.core.js"
              data-name="v4.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.0">
                v4.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v4.0.0.rc1/js/foundation.core.js"
              data-name="v4.0.0.rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.0.rc1">
                v4.0.0.rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.5/js/foundation.core.js"
              data-name="v3.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.5">
                v3.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.4/js/foundation.core.js"
              data-name="v3.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.4">
                v3.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.4.rc1/js/foundation.core.js"
              data-name="v3.2.4.rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.4.rc1">
                v3.2.4.rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.3/js/foundation.core.js"
              data-name="v3.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.3">
                v3.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.2/js/foundation.core.js"
              data-name="v3.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.2">
                v3.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.1/js/foundation.core.js"
              data-name="v3.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.1">
                v3.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.0/js/foundation.core.js"
              data-name="v3.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.0">
                v3.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.0.rc3/js/foundation.core.js"
              data-name="v3.2.0.rc3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.0.rc3">
                v3.2.0.rc3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.0.rc2/js/foundation.core.js"
              data-name="v3.2.0.rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.0.rc2">
                v3.2.0.rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.2.0.rc1/js/foundation.core.js"
              data-name="v3.2.0.rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.0.rc1">
                v3.2.0.rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.1.1/js/foundation.core.js"
              data-name="v3.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.1">
                v3.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.1.0/js/foundation.core.js"
              data-name="v3.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.0">
                v3.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.1.0.rc1/js/foundation.core.js"
              data-name="v3.1.0.rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.0.rc1">
                v3.1.0.rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.9/js/foundation.core.js"
              data-name="v3.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.9">
                v3.0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.9.rc1/js/foundation.core.js"
              data-name="v3.0.9.rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.9.rc1">
                v3.0.9.rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.8/js/foundation.core.js"
              data-name="v3.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.8">
                v3.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.8.rc1/js/foundation.core.js"
              data-name="v3.0.8.rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.8.rc1">
                v3.0.8.rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.7/js/foundation.core.js"
              data-name="v3.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.7">
                v3.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.7.rc11/js/foundation.core.js"
              data-name="v3.0.7.rc11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.7.rc11">
                v3.0.7.rc11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.7.rc10/js/foundation.core.js"
              data-name="v3.0.7.rc10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.7.rc10">
                v3.0.7.rc10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/zurb/foundation-sites/tree/v3.0.7.rc9/js/foundation.core.js"
              data-name="v3.0.7.rc9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.7.rc9">
                v3.0.7.rc9
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/zurb/foundation-sites/find/develop"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/zurb/foundation-sites"><span>foundation-sites</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/zurb/foundation-sites/tree/develop/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">foundation.core.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/zurb/foundation-sites/commit/9bdf0817e70fec15b1df643d6651ecdd5fe0ad02" data-pjax>
          9bdf081
        </a>
        <relative-time datetime="2017-02-28T19:18:09Z">Feb 28, 2017</relative-time>
      </span>
      <div>
        <img alt="@kball" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/44007?v=3&amp;s=40" width="20" />
        <a href="/kball" class="user-mention" rel="contributor">kball</a>
          <a href="/zurb/foundation-sites/commit/9bdf0817e70fec15b1df643d6651ecdd5fe0ad02" class="message" data-pjax="true" title="Package up 6.3.1 release">Package up 6.3.1 release</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>9</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="zurbchris" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=zurbchris"><img alt="@zurbchris" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/13631168?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gakimball" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=gakimball"><img alt="@gakimball" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1142001?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kball" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=kball"><img alt="@kball" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/44007?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pine3ree" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=pine3ree"><img alt="@pine3ree" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3229979?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="flipnode" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=flipnode"><img alt="@flipnode" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/102014?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Owlbertz" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=Owlbertz"><img alt="@Owlbertz" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/4280373?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dragthor" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=dragthor"><img alt="@dragthor" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/156634?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="evanlask" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=evanlask"><img alt="@evanlask" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5704026?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="colin-marshall" href="/zurb/foundation-sites/commits/develop/js/foundation.core.js?author=colin-marshall"><img alt="@colin-marshall" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/4453733?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@zurbchris" height="24" src="https://avatars1.githubusercontent.com/u/13631168?v=3&amp;s=48" width="24" />
            <a href="/zurbchris">zurbchris</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gakimball" height="24" src="https://avatars2.githubusercontent.com/u/1142001?v=3&amp;s=48" width="24" />
            <a href="/gakimball">gakimball</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kball" height="24" src="https://avatars0.githubusercontent.com/u/44007?v=3&amp;s=48" width="24" />
            <a href="/kball">kball</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pine3ree" height="24" src="https://avatars3.githubusercontent.com/u/3229979?v=3&amp;s=48" width="24" />
            <a href="/pine3ree">pine3ree</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@flipnode" height="24" src="https://avatars3.githubusercontent.com/u/102014?v=3&amp;s=48" width="24" />
            <a href="/flipnode">flipnode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Owlbertz" height="24" src="https://avatars1.githubusercontent.com/u/4280373?v=3&amp;s=48" width="24" />
            <a href="/Owlbertz">Owlbertz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dragthor" height="24" src="https://avatars1.githubusercontent.com/u/156634?v=3&amp;s=48" width="24" />
            <a href="/dragthor">dragthor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@evanlask" height="24" src="https://avatars1.githubusercontent.com/u/5704026?v=3&amp;s=48" width="24" />
            <a href="/evanlask">evanlask</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@colin-marshall" height="24" src="https://avatars3.githubusercontent.com/u/4453733?v=3&amp;s=48" width="24" />
            <a href="/colin-marshall">colin-marshall</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/zurb/foundation-sites/raw/develop/js/foundation.core.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/zurb/foundation-sites/blame/develop/js/foundation.core.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/zurb/foundation-sites/commits/develop/js/foundation.core.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      379 lines (344 sloc)
      <span class="file-info-divider"></span>
    12.7 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">!</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">FOUNDATION_VERSION</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>6.3.1<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Global Foundation object</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> This is attached to the window, or used as a module for AMD/Browserify</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> Foundation <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">  version<span class="pl-k">:</span> <span class="pl-c1">FOUNDATION_VERSION</span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Stores initialized plugins.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  _plugins<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Stores generated unique ids for plugin instances</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  _uuids<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Returns a boolean for RTL support</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">rtl</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>dir<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rtl<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">plugin</span> - The constructor of the plugin.</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">plugin</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">plugin</span>, <span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Object key to use when adding to global Foundation object</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Examples: Foundation.Reveal, Foundation.OffCanvas</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> className <span class="pl-k">=</span> (name <span class="pl-k">||</span> <span class="pl-en">functionName</span>(plugin));</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Examples: data-reveal, data-off-canvas</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> attrName  <span class="pl-k">=</span> <span class="pl-en">hyphenate</span>(className);</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Add to the Foundation object and the plugins list (for reflowing)</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">_plugins</span>[attrName] <span class="pl-k">=</span> <span class="pl-c1">this</span>[className] <span class="pl-k">=</span> plugin;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Populates the _uuids array with pointers to each individual plugin instance.</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Also fires the initialization event for each plugin, consolidating repetitive code.</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">plugin</span> - an instance of a plugin, usually `this` in context.</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">name</span> - the name of the plugin, passed as a camelCased string.</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@fires</span> Plugin#init</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">registerPlugin</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">plugin</span>, <span class="pl-smi">name</span>){</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> pluginName <span class="pl-k">=</span> name <span class="pl-k">?</span> <span class="pl-en">hyphenate</span>(name) <span class="pl-k">:</span> <span class="pl-en">functionName</span>(<span class="pl-smi">plugin</span>.<span class="pl-c1">constructor</span>).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">plugin</span>.<span class="pl-smi">uuid</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">GetYoDigits</span>(<span class="pl-c1">6</span>, pluginName);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">plugin</span>.<span class="pl-smi">$element</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">`</span>data-<span class="pl-s1"><span class="pl-pse">${</span>pluginName<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>)){ <span class="pl-smi">plugin</span>.<span class="pl-smi">$element</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">`</span>data-<span class="pl-s1"><span class="pl-pse">${</span>pluginName<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>, <span class="pl-smi">plugin</span>.<span class="pl-smi">uuid</span>); }</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">plugin</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>)){ <span class="pl-smi">plugin</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>, plugin); }</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * Fires when the plugin has initialized.</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-k">@event</span> Plugin#init</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">plugin</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">`</span>init.zf.<span class="pl-s1"><span class="pl-pse">${</span>pluginName<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>);</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">_uuids</span>.<span class="pl-c1">push</span>(<span class="pl-smi">plugin</span>.<span class="pl-smi">uuid</span>);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Removes the plugins uuid from the _uuids array.</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Also fires the destroyed event for the plugin, consolidating repetitive code.</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">plugin</span> - an instance of a plugin, usually `this` in context.</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@fires</span> Plugin#destroyed</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">unregisterPlugin</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">plugin</span>){</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> pluginName <span class="pl-k">=</span> <span class="pl-en">hyphenate</span>(<span class="pl-en">functionName</span>(<span class="pl-smi">plugin</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">constructor</span>));</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">_uuids</span>.<span class="pl-c1">splice</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_uuids</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">plugin</span>.<span class="pl-smi">uuid</span>), <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">plugin</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">`</span>data-<span class="pl-s1"><span class="pl-pse">${</span>pluginName<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>).<span class="pl-en">removeData</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * Fires when the plugin has been destroyed.</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-k">@event</span> Plugin#destroyed</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">          .<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">`</span>destroyed.zf.<span class="pl-s1"><span class="pl-pse">${</span>pluginName<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">var</span> prop <span class="pl-k">in</span> plugin){</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">      plugin[prop] <span class="pl-k">=</span> <span class="pl-c1">null</span>;<span class="pl-c"><span class="pl-c">//</span>clean up script to prep for garbage collection.</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">plugins</span> - optional string of an individual plugin key, attained by calling `$(element).data(&#39;pluginName&#39;)`, or string of a plugin class i.e. `&#39;dropdown&#39;`</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@default</span> If no argument is passed, reflow all currently active plugins.</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">   <span class="pl-en">reInit</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">plugins</span>){</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">     <span class="pl-k">var</span> isJQ <span class="pl-k">=</span> plugins <span class="pl-k">instanceof</span> $;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">     <span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">       <span class="pl-k">if</span>(isJQ){</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">         <span class="pl-smi">plugins</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">           <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>).<span class="pl-en">_init</span>();</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">         });</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">       }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">         <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-k">typeof</span> plugins,</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">         _this <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">         fns <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">           <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">object</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">plgs</span>){</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">             <span class="pl-smi">plgs</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">p</span>){</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">               p <span class="pl-k">=</span> <span class="pl-en">hyphenate</span>(p);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">               <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> p <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">foundation</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>_init<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">             });</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">           },</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">           <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">string</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">             plugins <span class="pl-k">=</span> <span class="pl-en">hyphenate</span>(plugins);</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">             <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> plugins <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">foundation</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>_init<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">           },</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">           <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">undefined</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">             <span class="pl-c1">this</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>](<span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(<span class="pl-smi">_this</span>.<span class="pl-smi">_plugins</span>));</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">           }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">         };</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">         fns[type](plugins);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">       }</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">     }<span class="pl-k">catch</span>(err){</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">       <span class="pl-en">console</span>.<span class="pl-c1">error</span>(err);</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">     }<span class="pl-k">finally</span>{</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">       <span class="pl-k">return</span> plugins;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">     }</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">   },</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * returns a random base-36 uid with namespacing</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Number}</span> <span class="pl-smi">length</span> - number of random base-36 digits desired. Increase for more random strings.</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">namespace</span> - name of plugin to be incorporated in uid, optional.</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@default</span> <span class="pl-en">{String}</span> &#39;&#39; - if no plugin name is provided, nothing is appended to the uid.</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> <span class="pl-en">{String}</span> - unique id</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">GetYoDigits</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">length</span>, <span class="pl-smi">namespace</span>){</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">    length <span class="pl-k">=</span> length <span class="pl-k">||</span> <span class="pl-c1">6</span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>((<span class="pl-c1">Math</span>.<span class="pl-c1">pow</span>(<span class="pl-c1">36</span>, length <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">-</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-c1">Math</span>.<span class="pl-c1">pow</span>(<span class="pl-c1">36</span>, length))).<span class="pl-c1">toString</span>(<span class="pl-c1">36</span>).<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> (namespace <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">`</span>-<span class="pl-s1"><span class="pl-pse">${</span>namespace<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren&#39;t already initialized.</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">elem</span> - jQuery object containing the element to check inside. Also checks the element itself, unless it&#39;s the `document` object.</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{String|Array}</span> <span class="pl-smi">plugins</span> - A list of plugins to initialize. Leave this out to initialize everything.</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">reflow</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">elem</span>, <span class="pl-smi">plugins</span>) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> If plugins is undefined, just grab everything</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> plugins <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      plugins <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_plugins</span>);</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> If plugins is a string, convert it to an array with one item</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> plugins <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">      plugins <span class="pl-k">=</span> [plugins];</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _this <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Iterate through each plugin</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-en">each</span>(plugins, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Get the current plugin</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> plugin <span class="pl-k">=</span> <span class="pl-smi">_this</span>.<span class="pl-smi">_plugins</span>[name];</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Localize the search to all elements inside elem, as well as elem itself, unless elem === document</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> $elem <span class="pl-k">=</span> <span class="pl-en">$</span>(elem).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>name<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addBack</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>name<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> For each plugin found, initialize it</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$elem</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $el <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>),</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">            opts <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Don&#39;t double-dip on plugins</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">$el</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">console</span>.<span class="pl-c1">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Tried to initialize <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>name<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> on an element that already has a Foundation plugin.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-options<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> thing <span class="pl-k">=</span> <span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-options<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>, <span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> opt <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span>).<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">el</span>){ <span class="pl-k">return</span> <span class="pl-smi">el</span>.<span class="pl-en">trim</span>(); });</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(opt[<span class="pl-c1">0</span>]) opts[opt[<span class="pl-c1">0</span>]] <span class="pl-k">=</span> <span class="pl-en">parseValue</span>(opt[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$el</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">plugin</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>), opts));</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">        }<span class="pl-k">catch</span>(er){</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">console</span>.<span class="pl-c1">error</span>(er);</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        }<span class="pl-k">finally</span>{</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">  getFnName<span class="pl-k">:</span> functionName,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">transitionend</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">$elem</span>){</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> transitions <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>transition<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>transitionend<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>WebkitTransition<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>webkitTransitionEnd<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>MozTransition<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>transitionend<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>OTransition<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>otransitionend<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> elem <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        end;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> t <span class="pl-k">in</span> transitions){</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-smi">elem</span>.<span class="pl-c1">style</span>[t] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        end <span class="pl-k">=</span> transitions[t];</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(end){</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> end;</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">    }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">      end <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$elem</span>.<span class="pl-en">triggerHandler</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>transitionend<span class="pl-pds">&#39;</span></span>, [$elem]);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>transitionend<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Foundation</span>.<span class="pl-smi">util</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Function for applying a debounce effect to a function call.</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">func</span> - Function to be called at end of timeout.</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Number}</span> <span class="pl-smi">delay</span> - Time in ms to delay the call of `func`.</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> function</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">throttle</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">func</span>, <span class="pl-smi">delay</span>) {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> timer <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> context <span class="pl-k">=</span> <span class="pl-c1">this</span>, args <span class="pl-k">=</span> <span class="pl-c1">arguments</span>;</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (timer <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        timer <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(context, args);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">          timer <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        }, delay);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> TODO: consider not making this a jQuery function</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> TODO: need way to reflow vs. re-initialize</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The Foundation jQuery method.</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{String|Array}</span> <span class="pl-smi">method</span> - An action to perform on the current jQuery object.</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">foundation</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">method</span>) {</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-k">typeof</span> method,</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">      $meta <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>meta.foundation-mq<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">      $noJS <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.no-js<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$meta</span>.<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;meta class=&quot;foundation-mq&quot;&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">appendTo</span>(<span class="pl-c1">document</span>.<span class="pl-smi">head</span>);</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-smi">$noJS</span>.<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$noJS</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>no-js<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>){<span class="pl-c"><span class="pl-c">//</span>needs to initialize the Foundation object, or an individual plugin.</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Foundation</span>.<span class="pl-smi">MediaQuery</span>.<span class="pl-en">_init</span>();</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Foundation</span>.<span class="pl-en">reflow</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">  }<span class="pl-k">else</span> <span class="pl-k">if</span>(type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){<span class="pl-c"><span class="pl-c">//</span>an individual method to invoke on a plugin or group of plugins</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>, <span class="pl-c1">1</span>);<span class="pl-c"><span class="pl-c">//</span>collect all the arguments, if necessary</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> plugClass <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>);<span class="pl-c"><span class="pl-c">//</span>determine the class of plugin</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(plugClass <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> plugClass[method] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>){<span class="pl-c"><span class="pl-c">//</span>make sure both the class and method exist</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>){<span class="pl-c"><span class="pl-c">//</span>if there&#39;s only one, call it directly.</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">          plugClass[method].<span class="pl-c1">apply</span>(plugClass, args);</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">      }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">el</span>){<span class="pl-c"><span class="pl-c">//</span>otherwise loop through the jQuery collection and invoke the method on each</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">          plugClass[method].<span class="pl-c1">apply</span>(<span class="pl-en">$</span>(el).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>zfPlugin<span class="pl-pds">&#39;</span></span>), args);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">    }<span class="pl-k">else</span>{<span class="pl-c"><span class="pl-c">//</span>error for no class or no method</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">ReferenceError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>We&#39;re sorry, &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> method <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39; is not an available method for <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (plugClass <span class="pl-k">?</span> <span class="pl-en">functionName</span>(plugClass) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>this element<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">  }<span class="pl-k">else</span>{<span class="pl-c"><span class="pl-c">//</span>error for invalid argument type</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">TypeError</span>(<span class="pl-s"><span class="pl-pds">`</span>We&#39;re sorry, <span class="pl-s1"><span class="pl-pse">${</span>type<span class="pl-pse">}</span></span> is not a valid parameter. You must use a string representing the method you wish to invoke.<span class="pl-pds">`</span></span>);</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">window</span>.<span class="pl-smi">Foundation</span> <span class="pl-k">=</span> Foundation;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">foundation</span> <span class="pl-k">=</span> foundation;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Polyfill for requestAnimationFrame</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">Date</span>.<span class="pl-smi">now</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">Date</span>.<span class="pl-smi">now</span>)</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-smi">Date</span>.<span class="pl-smi">now</span> <span class="pl-k">=</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>(); };</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> vendors <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>webkit<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>moz<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">vendors</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">requestAnimationFrame</span>; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> vp <span class="pl-k">=</span> vendors[i];</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">window</span>.<span class="pl-smi">requestAnimationFrame</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>[vp<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>RequestAnimationFrame<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">window</span>.<span class="pl-smi">cancelAnimationFrame</span> <span class="pl-k">=</span> (<span class="pl-c1">window</span>[vp<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>CancelAnimationFrame<span class="pl-pds">&#39;</span></span>]</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">                                 <span class="pl-k">||</span> <span class="pl-c1">window</span>[vp<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>CancelRequestAnimationFrame<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>iP(ad<span class="pl-k">|</span>hone<span class="pl-k">|</span>od)<span class="pl-c1">.</span><span class="pl-k">*</span>OS 6<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>)</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">requestAnimationFrame</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">cancelAnimationFrame</span>) {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> lastTime <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-en">requestAnimationFrame</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> now <span class="pl-k">=</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>();</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> nextTime <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(lastTime <span class="pl-k">+</span> <span class="pl-c1">16</span>, now);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() { <span class="pl-en">callback</span>(lastTime <span class="pl-k">=</span> nextTime); },</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">                          nextTime <span class="pl-k">-</span> now);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-smi">cancelAnimationFrame</span> <span class="pl-k">=</span> clearTimeout;</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Polyfill for performance.now, required by rAF</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">performance</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">performance</span>.<span class="pl-smi">now</span>){</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-smi">performance</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">      start<span class="pl-k">:</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>(),</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">now</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){ <span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>() <span class="pl-k">-</span> <span class="pl-c1">this</span>.<span class="pl-c1">start</span>; }</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">bind</span>) {</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">bind</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">oThis</span>) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">this</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> closest thing possible to the ECMAScript 5</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> internal IsCallable function</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">TypeError</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Function.prototype.bind - what is trying to be bound is not callable<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> aArgs   <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>, <span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">        fToBind <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">fNOP</span>    <span class="pl-k">=</span> <span class="pl-k">function</span>() {},</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">fBound</span>  <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">fToBind</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span> <span class="pl-k">instanceof</span> fNOP</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">                 <span class="pl-k">?</span> <span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">                 <span class="pl-k">:</span> oThis,</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">                 <span class="pl-smi">aArgs</span>.<span class="pl-c1">concat</span>(<span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>)));</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">prototype</span>) {</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> native functions don&#39;t have a prototype</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">fNOP</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">prototype</span>;</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">fBound</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">fNOP</span>();</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> fBound;</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Polyfill to get the name of a function in IE9</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">functionName</span>(<span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.<span class="pl-c1">name</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> funcNameRegex <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>function<span class="pl-c1">\s</span>(<span class="pl-c1">[<span class="pl-k">^</span>(]</span><span class="pl-k">{1,}</span>)<span class="pl-cce">\(</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> results <span class="pl-k">=</span> (funcNameRegex).<span class="pl-c1">exec</span>((fn).<span class="pl-c1">toString</span>());</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (results <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">results</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) <span class="pl-k">?</span> results[<span class="pl-c1">1</span>].<span class="pl-en">trim</span>() <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">fn</span>.<span class="pl-c1">prototype</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">fn</span>.<span class="pl-c1">constructor</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">fn</span>.<span class="pl-c1">prototype</span>.<span class="pl-c1">constructor</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">parseValue</span>(<span class="pl-smi">str</span>){</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>true<span class="pl-pds">&#39;</span></span> <span class="pl-k">===</span> str) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>false<span class="pl-pds">&#39;</span></span> <span class="pl-k">===</span> str) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">isNaN</span>(str <span class="pl-k">*</span> <span class="pl-c1">1</span>)) <span class="pl-k">return</span> <span class="pl-c1">parseFloat</span>(str);</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Convert PascalCase to kebab-case</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Thank you: http://stackoverflow.com/a/8955580</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">hyphenate</span>(<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span>)(<span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span>)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1-$2<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">}(jQuery);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>




    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.16949s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-0ZLoD9NuEtMY0oxGaomY68qdIKFaOBIvme3+RGEqA0s=" src="https://assets-cdn.github.com/assets/frameworks-d192e80fd36e12d318d28c466a8998ebca9d20a15a38122f99edfe44612a034b.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-Xy9NKiLux34bbWcH8ROLCkMBsmV02xh3B0UUD+GmcbA=" src="https://assets-cdn.github.com/assets/github-5f2f4d2a22eec77e1b6d6707f1138b0a4301b26574db18770745140fe1a671b0.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

