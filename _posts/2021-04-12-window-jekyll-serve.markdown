---
layout: post
title: Jekyll 블로그 로컬 서버 연결(윈도우)
tags: [jekyll, gitblog, tag01]
# image: '/images/posts/8.jpg'
---

오랜만에 지킬 블로그를 다시 사용해보고 있다. 수정을 좀 해서 포트폴리오로 쓸 계획인데 깃허브에 커밋하고 확인하고 하다보니 시간도 너무 오래 걸리고 불편해서 윈도우에서 로컬 서버에 연결하는 방법을 찾았다.

### 1. Ruby(루비) 설치
[Ruby 인스톨러 페이지](https://rubyinstaller.org/downloads/)에서 원하는 버전을 다운 받는다. 나는 잘 몰라서  `=>`가 있는 진한 글씨의 버전을 내려받았다.

<br>

### 2. Jekyll(지킬) 설치
Ruby를 설치하면 `Start Command Prompt with Ruby`라는 프로그램이 설치된다. 이 콘솔을 이용해 jekyll 패키지를 설치해줘도 되고 나 같은 경우에는 `Git Bash` 콘솔을 이용했다.

```bash
gem install jekyll bundler
```

<br>

### 3. jekyll serve 명령어 실행
```bash
jekyll serve
```

Jekyll 블로그 로컬 폴더에서 `jekyll serve`라는 명령어를 실행한다.

- Jekyll 버전 때문에 계속 아래의 오류가 뜨며 실행이 되지 않아서 해결 방법을 찾았다.

```bash
C:/Ruby27-x64/lib/ruby/2.7.0/bundler/spec_set.rb:86:in `block in materialize': Could not find public_suffix-4.0.5 in any of the sources (Bundler::GemNotFound)
```

> 1. 지킬 프로젝트 내 Gemfile.lock 파일 삭제
> 2. 터미널에서 `bundle install` 명령어 실행
> ###### ([Jekyll 하위 버전 실행 시 오류 - Gunlog](https://gunlog.dev/Jekyll-Error/))

- 태그 때문에 넣은 `_data/tag.yml` 관련해서도 오류가 발생하여 일단 삭제 후에 진행했다.

<br>

### 4. 접속(localhost:4000)
이제 브라우저에 `localhost:4000` 링크를 넣어 로컬로 접속할 수 있다.

<br>

---

##### 참고:
[지킬(Jekyll)을 이용하여 블로그 만들기 [윈도우/Windows] - hytenic.log](https://velog.io/@hytenic/%EC%A7%80%ED%82%ACJekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9C%88%EB%8F%84%EC%9A%B0Windows),
[빠른 시작 | Jekyll • 심플한, 블로그 지향적, 정적 사이트](https://jekyllrb-ko.github.io/docs/)