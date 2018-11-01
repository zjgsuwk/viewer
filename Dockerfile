FROM neptunus/youtube-viewer

WORKDIR /workspace

ADD . /workspace

RUN python youtube.py 300 urls.txt 38 65

