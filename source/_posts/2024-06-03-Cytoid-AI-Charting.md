---
title: Cytoid AI Charting
date: 2024-06-03 15:58:56
tags:
---

1. 相关论文实现


Survey 1: https://www.qbitai.com/2022/03/33133.html

1.1 现有技术(1)：100k songs, 44GB data
https://github.com/chrisdonahue/ddc 
https://arxiv.org/pdf/1703.06891.pdf

	
1.2 GeneLive在DDC基础上improve：
现有技术2：GenéLive! Generating Rhythm Actions in Love Live! | Proceedings of the AAAI Conference on Artificial Intelligence
https://arxiv.org/abs/2202.12823
https://github.com/chrisdonahue/ddc

1.3 现有技术3： 
MuG Diffusion:
https://www.bilibili.com/video/BV1Sg4y1j7sz/?vd_source=441679270dda23308fe16f3c5602b058
https://github.com/Keytoyze/Mug-Diffusion





2. 音游相关特征

- 这次使用的音游：
	https://cytoid.io/
- 扒谱网站：
    https://cytoid.io/levels
- 扒谱工具：（应该用不到）
    https://sites.google.com/site/cytoidcommunity/charting/introduction-cy2unity
- 谱面格式介绍：
    https://github.com/openmusicgame/omgc
- 这个教授研究很多音乐：
    https://scholar.google.com/citations?user=MgzHAPQAAAAJ&hl=en&oi=ao


3. 前人一些工程上经验（按照规模排序）

1. https://zhuanlan.zhihu.com/p/107010304
2. https://www.mirrorange.com/ai-beatmap-generator-train/
3. MuG Diffusion


ChoreoGraph Chart for Musical Game
Step Placement: When to place step
Step Selection: Which step to place




4.音游数据
https://drive.google.com/drive/folders/1J43x9f8u2lIzaHBolQaZveCv62XQM8Lv

Music library:
https://soundcloud.com/openai_audio/rachmaninoff


# DDC Paper 17
https://arxiv.org/pdf/1703.06891

MIR Music information retrival
onset detection: 
tasks: (learning to choreograph)
1. step placement
2. step selection

# GeneLive 23
https://arxiv.org/abs/2202.12823
generatiive deep learning

文中提及 BiLSTM 比 Transformer也许更适合。 
two novel techniques: beat guide, multi-sclae conv-stack
1. beat guide寻找节奏型
2. 




# TaikoNation 21: 
https://arxiv.org/pdf/2107.12506
LSTM


# Other related papers 
## 19 via DL 
https://inria.hal.science/hal-03652042v1/document

## 19 aaai keysounded
https://arxiv.org/pdf/1806.11170

# problems encountered
0.首先做的是关于给定t和diffculty ，生成对应的对应的（是预测下个tick 是否放置key还是预测下一个note的出现时间）

1. combine of level and others 
   - 可以看一下前人论文Genelive 是怎么解决的
   - Hetergenous variable in BiLSTM(a type on RNN)
   -  
2. time series
3. how to pose x. 

最后实现，就是， 并没有参考任何技术，直接LSTM就上了。

 






