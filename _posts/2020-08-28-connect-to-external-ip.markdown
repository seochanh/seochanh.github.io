---
layout: post
title: '[SSH, Linux] VM 인스턴스를 다른 OS로 외부IP 주소에 접속하기'
tags: [linux, gcloud, server]
image: 
  feature: /images/posts/gcloud.jpg
---
<br>

> #### 웹에서 아이패드와 동일한 서버에 접속되지 않는 경우
![웹에서 아이패드와 동일한 서버에 접속하는 방법](/images/posts/2020-08-28/ipad-account.png)
1. 아이패드 SSH 키를 저장할 때 설정한 계정 이름을 기존 계정 이름과 동일하게 수정하거나 추가합니다. 기존에 저장된 파일이 있다면 2번의 방법을 통해 파일을 확인할 수 있습니다.
2. `$ cd /home; ls` 홈 경로로 가서 폴더를 보시면 새로 만든 계정과 아이패드에서 만든 계정이 모두 존재하는 것을 볼 수 있습니다. 불편하지 않다면 `$ cd`로 이동해서 사용하시면 됩니다.
3. 원하는 계정으로 바로 접속하기 원하시면 아래의 방법들을 사용하시면 됩니다.

***

[이 영상](https://www.youtube.com/watch?v=u7LvG-deMOE)을 통해 서버를 할당받고 외부IP를 고정했습니다. 그리고나서 아이패드로 그 주소를 통해 서버에 접속하는 것은 어렵지 않았다. 하지만 PC로 그 주소에 접속하려 하니 되지 않았습니다. 아이패드의 public key를 구글 플랫폼에 등록했던 것처럼 사용하려는 OS의 SSH키 등록이 필요했습니다. 참고로 저는 윈도우의 Git Bash Shell과 웹의 키를 등록하여 접속해봤습니다.

<br>

### 1. public key(SSH 키) 만들기
아이패드의 `blink shell`은 이 key가 자동으로 할당되어 있지만 다른 OS에서는 따로 키를 만들어줘야 했습니다. 
```bash
$ ~/.ssh                  # .ssh 폴더로
$ ssh-keygen -t rsa       # rsa라는 암호화 방식으로 키를 생성
Enter file in which to save the key (/home/axl/.ssh/id_rsa): <return>     # 필요에 따라 비밀번호 생성
Enter same passphrase again: <Type the passphrase>      # 비밀번호 확인
```
키를 이렇게 생성해준 후에 vim으로 들어가서 key를 복사하면 됩니다.
```bash
$ vim id_rsa.pub
```

- [SSH Key(egoing)](https://opentutorials.org/module/432/3742)
- [SSH 공개키 만들기](https://git-scm.com/book/ko/v2/Git-%EC%84%9C%EB%B2%84-SSH-%EA%B3%B5%EA%B0%9C%ED%82%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0)

<br>

### 2. public key(SSH 키) 붙여넣기
다시 한 번 [영상을 확인하고](https://www.youtube.com/watch?v=u7LvG-deMOE) 키를 채워 넣었습니다.
`[Google Cloud Platform](https://console.cloud.google.com/) > Compute Engine > 메타데이터 > SSH 키 > 수정`에 추가하고 붙여넣으면 됩니다. 키 뒤에 한 번 띄고 계정이름을 쓰면 되는데 계정 이름이 다르면 접속하는 페이지가 달라집니다. 따라 분리해서 쓰는 게 아니라면 기존 계정 이름과 동일하게 사용하는 게 가장 좋을 것 같네요. SSH 키 추가가 완료되었다면 `$ ssh [계정이름]@[외부IP 주소]`로 접속하면 됩니다.
![git bash로 외부ip 접속](/images/posts/2020-08-28/gitbash.png)

> 위의 작업을 하다가 알게 되었는데 Git Bash는 `sudo`와 `get-apt`라는 명령어를 쓸 수 없다. 이 컴퓨터로는 매번 git 명령어만 사용하다보니 몰랐나보다.
- [참고](https://stackoverflow.com/questions/38629058/in-git-for-windows-bash-how-to-install-get-apt-and-sudo-and-all-those-basic)