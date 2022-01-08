# 개발환경
docker node:14.16.1

docker run -d -it -p 3000:3000 --name node_dev3 -v /Users/unggi/Documents/Coding:/app node:14.16.1

docker exec -it node_dev3 /bin/bash

# 리액트 실행

npm start


# reference

https://velog.io/@jinan159/Docker%EB%A1%9C-Node.js-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95-%ED%95%98%EA%B8%B0feat.-M1-Macbook