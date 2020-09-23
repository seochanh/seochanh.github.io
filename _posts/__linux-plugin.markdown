리눅스 플러그인??

### 2. public key(SSH 키) 복사하기
public key 복사가 필요해서 사용해봄
```bash
$ sudo apt-get install xclip              # xclip 설치
$ xclip -sel clip < ~/.ssh/id_rsa.pub     # id_rsa.pub 파일 내용 클립보드로 복사
```
1. 첫 번째로 xclip을 사용해보려고 했습니다. 그런데 중간에 비밀번호를 할당해서 그런지 에러가 생겨서 읽을 수 없었습니다.
- [xclip 설치](https://plzrun.tistory.com/entry/ubuntu%EC%97%90%EC%84%9C-pbcopy-%EC%93%B0%EA%B8%B0-xclip)
- [ssh접속을 위해 클립보드에 public key 복사하기](https://blog.soobinpark.com/121)


```bash
$ sudo apt update && sudo apt install vim-gtk -y      # 클립보드를 지원하는 vim 설치
```
2. 두 번째 방법은 vim을 업데이트 하는 것입니다. 업데이트를 한 후에 vim 단축어 `y`로 복사를 하면 클립보드에 저장이 됩니다.
- [[Vim]클립보드 복사&붙여넣기](https://hyoje420.tistory.com/49)
