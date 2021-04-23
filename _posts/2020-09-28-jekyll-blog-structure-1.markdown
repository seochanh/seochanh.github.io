---
layout: post
title: 'Jekyll 블로그 구조 분석 1(파일편)'
tags: [jekyll, gitblog]
image:
  feature: /images/posts/jekyll-blog.png
---

공부를 계속하고 블로그를 운영해가면서 구조들이 눈에 보이기 시작했습니다. 아직 완전히 이해한 것은 아니지만 이해한 것들을 토대로 대충 정리해보려고 합니다.

```
aspirethemes/type
  │  .editorconfig
  │  .gitignore
  │  .ruby-version
  │  CNAME
  │  Gemdfile
  │  Gemfile.lock
  │  LICENSE
  │  README.md
  │  _config.yml
  │  favicon.ico
  │  feed.xml
  │  index.html
  ├─_includes
  ├─_layouts
  ├─_pages
  ├─_posts
  ├─_sass
  ├─admin
  ├─images
  └─js
```

저의 블로그는 위의 파일 구조에 나온 것처럼 Aspire Themes의 type 테마를 사용 중입니다. 다른 테마는 사용해보거나 확인해보지 못해 얼마나 다른 구조로 되어 있는지 모르겠네요. 제가 사용하는 테마에 최상위 디렉토리에 있는 파일들을 정리해보겠습니다.

<br>

### 1. `.editorconfig` : 에디터 서식 파일
단순하게는 '탭을 눌렀을 때 2칸을 띄우기로 설정'하는 에디터의 서식 파일입니다. 참고 사이트의 **동일한 코딩 스타일을 유지하도록 도와준다**는 문장이 좋은 설명이네요.
![EditorConfig for VS Code](/images/posts/2020-09-28/editorconfig-for-vscode.png)
적용이 번거로울 줄 알았는데 `EditorConfig for VS Code`라는 플러그인을 다운받으면 됩니다. 이 플러그인만 있으면 `.editorconfig` 파일을 인식하여 서식이 적용됩니다. 정말 신기하네요. 나중에 협업할 때 유용하게 사용할 수 있는 기능인 것 같습니다.
> 참고로 파일의 이름 앞에 `.`이 붙으면 숨김 파일입니다.
- 참고: [[SUBLIME TEXT 2] EDITORCONFIG PLUGIN](https://josephkim75.wordpress.com/tag/editorconfig/)

<br>

### 2. `.gitignore` : 깃이 무시하는 목록
깃이 무시하는 폴더와 파일 목록입니다.

<br>

### 3. `CNAME` : 커스텀 도메인 설정 파일
Jekyll 블로그 템플릿을 다운받은 후 나름대로 내용을 수정해서 사용했는데 깃 푸쉬를 할 때마다 계속해서 Page build warning 메일이 왔습니다. 확인해보니 CNAME는 커스텀 도메인을 설정하기 위한 파일이었고 사용하고 있는 템플릿에 커스텀 도메인이 적용되어 있었습니다.
저는 따로 커스텀 도메인이 없어서 파일을 삭제했습니다. CNAME 파일을 삭제하고 나니 더 이상 Warning 메일이 오지 않네요. 편안 ☺️

- 참고: [Github Pages에 Custom Domain 적용하기](https://www.holaxprogramming.com/2017/05/15/github-page-and-custom-domain/)

<br>

### 4. `READMD.md` : 깃허브 레파지토리 설명서
깃허브 레파지토리의 설명서(?)의 역할을 합니다.

<br>

### 5. `_config.yml` : 블로그 환경설정
형식 정리가 아주 쉬운 YAML로 이루어진 파일입니다. 블로그에 관한 다양한 세팅들을 할 수 있습니다.
> 파일 이름 앞에 `_`가 붙으면 블로그에서 읽지 않습니다.

<br>

### 6. `favicon.ico` : 상단 탭 아이콘
**파비콘은 웹페이지에 접속했을 때, 상단 탭에 보여지는 아이콘을 일컫는다.** 그렇답니다. 이렇게 간결하고 이해하기 좋은 설명은 어떻게 쓰는 걸까요.
일반 웹사이트를 만들 경우 파비콘을 크기별로 다양하게 넣어야 하는데 Jekyll 블로그는 1개의 이미지만 있으면 되나 보네요.

- 참고: [파비콘(Favicon)의 모든 것](https://webdir.tistory.com/337)

<br>

### 7. `feed.xml` : RSS 사용을 위한 파일
블로그의 글을 쉽게 받아오는데 사용되는 RSS를 사용하기 위한 파일입니다.
다양한 feed 파일이 있을 수 있는데 그중 feed.xml 파일은 최근 10개의 글을 가져올 수 있다고 하네요.
네이버 웹마스터 도구에서 RSS제출을 할 때도 이 파일을 사용합니다.
- 참고: [Feed.xml RSS for Jekyll blog on GitHub pages.](https://blocks.roadtolarissa.com/roachhd/f664d2cae2da899be3f6)

<br>

### 8. Ruby 기반의 Jekyll 사용을 위한 파일들
`.ruby-version`, `Gemfile`, `Gemfile.lock` 이 세 개의 파일은 루비 기반의 Jekyll을 사용하기 위한 파일인 것 같은데 루비에 대해 잘 몰라서 용도를 쉽게 이해하기 어렵네요. 특히 버전 넘버만 적혀있는 .ruby-version은 존재 이유를 모르겠습니다.

<br>

> 블로그 관리를 위해 파일들을 분석했지만 많은 것들을 배웠습니다. 블로그 관리 외에도 써먹을 수 있는 것들이 많다는 게 일석이조네요.

- [Aspire Themes의 type 테마](https://github.com/aspirethemes/type)