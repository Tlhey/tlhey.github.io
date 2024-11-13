---
title: papers
date: 2024-05-08 20:11:06
tags:
---

# 1. Counterfactual fairness
Counterfactual fairness
link: https://proceedings.neurips.cc/paper_files/paper/2017/file/a486cd07e4ac3d270571622f4f316ec5-Paper.pdf

###
Definitions:
#### defs
$A$: Protected attributes, sensitive features\
$X$: features of individuals, excluding A\
$U$: latent features not observed, represented\
$Y$: predictor    
#### Fairness through unawareness (FTU):
_An algorithm is fair so long as any protected attributes $A$ are not explicitly used in the decision-making process._
Shortcoming: $X$ might intersects $A$

#### Individual Fairness (IF).
For distance metric(should be carefully choosen), $d(\cdot , \cdot)$, if $d(i, j)$ is small, then $\hat Y(X^{(i)}, A^{(i)}) \approx \hat Y(X^{(j)}, A^{(j)})$

#### Demographic Parity (DP)(人口统计学意义上的平等)
Predictor $\hat Y$ satisfies demographic partiy if $P(\hat Y|A=0)=P(\hat Y|A=1)$ 
#### Equality of Opportunity
$P(\hat Y|A=0, Y=1)=P(\hat Y|A=1, Y=1)$ 

### Causal Models(因果推断), Counterfacutal、
Casual Model $(U, V, F)$,\
$U$: latent background variables,\
$V$: observed variables, \
$F=\{f_1. f_2, \cdots, f_n\}$, for each $V_i=f_i(pa_i, U_{pa_i})\in V, pa_i \subseteq V \backslash {V_i}$ 

**Three Steps of Inference**\
- Abduction：for a given prior on $U$, compute the posterior distribution of $U$ given the evidence $W = w$
- Action：substitute the equations for $Z$ with the interventional values $z$, resulting in the modified set of equations $F_z$
- Prediction: 
## 题外话
### Casual Models (因果推断)
https://www.zhihu.com/column/c_1217887302124773376
#### Three levels:
1. Association: $A-B$ 
2. Intervention：$A/A' \rightarrow B?$
3. Counterfactual $ want\ B', how A\rightarrow A'$
#### Beyasian Network
In Directed acyclic Graph (DAG):
![alt text](papers/image.png)

https://www.cnblogs.com/mantch/p/11179933.html
Component:
1. head-to-head $a\rightarrow c\leftarrow b$ \
$P(a,b,c) = P(a)P(b)P(c|a,b)$,\
unknown $c$, $a, b$ are blocked thus independent
2. tail-to-tail $a\leftarrow c\rightarrow b$ 
- $c$ unknown, $P(a,b,c)=P(c)P(a|c)P(b|c)$, $a, b$, not independent
- $c$ known, $P(a,b,c)=P(c)P(a|c)P(b|c)$, $P(a,b|c)=P(a,b,c)/P(c)=P(a|c)*P(b|c)$, $a, b $independent
3. head-to-tail (Markov Chain) $A\rightarrow C\rightarrow B$ 
- $c$ unknown, $a, b$, not independent
- $c$ known, $a, b$ independent

**Factor Graph**

#### 
Confounder

## 总结
我从一天前开始看论文，被casual model的概念吸引了。我认为是很好的一个理解方式。从早上五点准备到十一点。\
今天做了pre，效果很差。
1. 对概率的各种公式很不太了解。对贝叶斯和MCMC不会。
2. 没有去想过$U ,A, X$的关系。没有办法很好的解释论文中的逻辑关系。

在开会的时候教授说重要东西：
1. Counterfactual \
这篇最重要的是： **Definition 5:** $P(\hat Y_{A\leftarrow a}(U)|X=x, A=a)=P(\hat Y_{A\leftarrow a'}(U)|X=x, A=a)$ \
很多‘概率’只是表示方法。（但是确实不很理解概率）\
算法的思想在于：1. 引入因果图。2.寻找U（17年MCMC，现在可以GAN，或其他生成式学习方法）。
2. $U \rightarrow X，A$ 
在计算中用$X, A \rightarrow U$ 有一些类似Adversarial learning. 可以研究怎么套用。
3. GAD
4. 有点想做transfer learning 的那种


# FairGAD
https://openreview.net/forum?id=3cE6NKYy8x

https://arxiv.org/abs/2307.04937
## Fair GAD problem
**GAD**\
$G=(V, E, X)$, \
node feature matrix $X\in \R^{n\times d}$, \
Adjacency matrix $A\in \{0,1\}^{n\times n}$, \
Anomaly labels $Y\in \{0, 1\}^n$, predicted $\hat Y$, \
**Fair GAD**\
sensitive attributes $S\in \{0, 1\}^n$, a binary feature $X$.\
Performance matrix: accuracy and _AUCROC_: Area under the ROC Curve \
Unfairness Mextrics, Statistic Parity(SP):$SP = |P(\hat Y=1|S=0)−P(\hat Y =1|S=1)|$, \
Equality of Odds _(EOO)_: $SP = |P(\hat Y=1|S=0, Y=1)−P(\hat Y =1|S=1, Y=1)|$
## Data
- Reddit: 
graph structure： linking two user posted the name subreddit within 24h.
Node feature: Embedding from post histories.
- Twitter: 
graph structure:: A follows B.
Node feature: demographic infromation using M3 system, multimodal, multilingual, multi attirbute demographix inderence framework.

<!-- ## GAD Methods
### DOMINANT (Ding et al., 2019a)
### CONAD (Xu et al., 2022)
### COLA (Liu et al., 2021)
### VGOD (Huang et al., 2023)

## Non-Graph AD methods
- DONE (Bandyopadhyay et al., 2020)
- AdONE (Bandyopadhyay et al., 2020)
- ECOD (Li et al., 2022)
- VAE (Kingma & Welling, 2014)
- ONE (Bandyopadhyay et al., 2019)
- LOF (Breunig et al., 2000)
- F (Liu et al., 2008)

## Fainess Method:
### FAIROD (Shekhar et al., 2021)
### CORRELATION (Shekhar et al., 2021)
### HIN (Zeng et al., 2021)
### EDITS (Dong et al., 2022)
### FAIRWALK (Rahman et al., 2019)

## Distance 
### Wasserstein Distance
### Minkowski distance -->



# 2024.05.23 Meeting summary 
1. 讨论了FairGAD。如果一个文章的贡献是数据集，那么需要详细的Benchmarking: 有一篇survey的性质，明白各种方法在数据集上表现怎么样，提出一个评判标准，只用EOO作为fair的判断太简短了。
2. 基于sentivity的Counterfactual fairness的评判标准，我们用什么样的评判标准和
2.1 最简单的构造方法 anomaly dataset：classification with y=1,2,3,4,5。拿很多1，sample较少2345.
2.2 找一些graph上数据集，用GAD的方法，变成fairGAD的数据集。但是FairGAD，是GAD数据集inject fairness，可能不太好。 
2.3 




## Task of this week 
create synthetic data for fair GAD
1. Note this paper: https://arxiv.org/pdf/2304.01391 for a survey on graph counterfactual. To create a synthetic dataset, see their Section 3.5.1, where the data creation method is detailed in https://arxiv.org/abs/2201.03662.
2. See pygod https://github.com/pygod-team/pygod for outlier injection method to the graph dataset. Also, see Jing's paper https://proceedings.mlr.press/v231/gu24a/gu24a.pdf for improvement.
3. Next Friday, you can try to talk about how to generate the synthetic data and how this falls into counterfactual category.


所以就是要借鉴创建数据集的方法。还有学习一些counterfactual。 


## 2024 Counterfactual Learning on Graphs: A Survey 
3.5.1 How to create synthetic dataset 

## 2022 Learning Fair Node Representations with Graph Counter factual Fairness
Two limitation on existing CF on graph:
1. $S_i$ affect the predetection. Red
2. $S_i$ affect $A, X_i$ Green 

GEAR: Graph Counterfactually Fair Node Representation
1. subgraph generation
Node **Importance Score** by prune range of casualmodel to **ego-centric subgraph**( node and its neighbour)
2. Counterfactual Data Argmentation: 
Graph Auto encodder and fair contrains: **self-pertubation**(flip its $S_i$), **neighbour pertubatiob**
3. Node Representation Learning  :
Siamese network to minimize discrepancy 

**Def, Graph conterfactual fairness:**
An encoder $\Phi(\cdot)$ satisfies graph counterfactual fairness if for any node $i$:
$$
P((Z_i)_{S \leftarrow s'} | X = \mathbf{X}, A = \mathbf{A}) = P((Z_i)_{S \leftarrow s''} | X = \mathbf{X}, A = \mathbf{A}),
$$
for all $s' \neq s''$, where $s', s'' \in \{0, 1\}^n$ are arbitrary sensitive attribute values of all nodes, $Z_i = (\Phi(\mathbf{X}, \mathbf{A}))_i$ denotes the node representations.

$\Phi$, minimize the discrepancy between representation $\Phi(X_{S\leftarrow s'}, A_{S\leftarrow s'})$ and $\Phi(X_{S\leftarrow s''}, A_{S\leftarrow s''})$


### GEAR
### 1) subgraph generation
Personalized Pagerank algorithm:
Importance score $\mathbf R=\alpha (\mathbf I-(1-\alpha \mathbf {\bar A}))$, $\mathbf I$, identity\
$R_{i,j}$ How node $j$ is important for node $i$, $\alpha \in [0,1]$

$\mathbf {\bar A}=\mathbf A \mathbf D^{-1} $ column-normalized adjacency matric, $\mathbf D: \mathbf D_{i, i}=\sum_j A{i, j}$

$\mathcal{G}^{(i)}=Sub(i, \mathcal{G}, k)$ :, subgraph generation

- $\mathcal{G}^{(i)} = \{ \mathcal{V}^{(i)}, \mathcal{E}^{(i)}, \mathbf{X}^{(i)} \} = \{ \mathbf{A}^{(i)}, \mathbf{X}^{(i)} \},
$ Vertive, Edge, Features with $S=\{s_i\}_{i=1}^n $ includes in $X$, and $X^{\neg s} = \{ x_1^{\neg s}, ..., x_n^{\neg s} \} $, where $ x_i^{\neg s} = x_i \setminus s_i$

- $\mathcal{V}^{(i)} = \text{TOP}(\mathbf{R}_{i,:}, k),$

- $\mathbf{A}^{(i)} = \mathbf{A}_{\mathcal{V}^{(i)}, \mathcal{V}^{(i)}}, \quad \mathbf{X}^{(i)} = \mathbf{X}_{\mathcal{V}^{(i)}, :},
$, 

### 2）Counterfactual Data Augmentation
**GraphVAG**: graph variational auto-encoder\
latent embedding $H=\{h_1, h_2, \cdots, h_k\}$  $H$ is sampled from $q(H|X, A)$,  $p(𝐻)$ is a standard Normal prior distribution\
$\mathcal{L}=$

$\tilde{s}_i$: summary of neighbor info, aggregationof all nodes in subgarph $\mathcal{G}^{(i)}$\
$\tilde{s}_i = \frac{1}{|\mathcal{V}^{(i)}|} \sum_{j \in \mathcal{V}^{(i)}} s_j$

Discriminator,$D(\cdot)$\
$D(\mathbf{H}, b)$  predicts the probability of whether the summary of sensitive attribute values is in range $b$

Fairness Constraint\
$L_d = \sum_{b \in B} \mathbb{E} [\log(D(\mathbf{H}, b))]$\
$L_d$ is a regularizer to minimize the mutual information between the summary of sensitive attribute values and the
embeddings

**Final Loss** for Counterfactual Data Augmentation\
$L_a = L_r + \beta L_d$\
$\beta$ is a hyperparameter for the weight of fairness constraint\
Use alternating SGD for optimization: 
1) minimize $L_{a}$ by fixing the discriminator and updating parameters in other parts; 
2) minimize $−L_{a}$ with respect to the discriminator while other parts fixed.


#### Self-Perturbation
$\overline{\mathcal{G}}^{(i)} = \{ \mathcal{G}^{(i)}_{S_i \leftarrow 1-s_i} \}$ (flipping sensitive feature)

#### Neighbor-Perturbation
$\underline{\mathcal{G}}^{(i)} = \left\{ \mathcal{G}^{(i)}_{S^{(i)}_{\setminus i} \leftarrow \text{SMP}(S^{(i)}_{\mathcal{V}^{(i)}_{\setminus i}})} \right\}$

subgraph $\mathcal{G}^{(i)}$ ego($i$)-center subgraph with noes $\mathcal{V}^{(i)}$, exclude node $i$: $\mathcal{V}^{(i)}_{\setminus i}$, randomly preterbe the sentsitice value of other nodes: $SMP(\mathcal{V}^{(i)}_{\setminus i})$



Reconstruction Loss (GraphVAE Module)\
$L_r = \mathbb{E}_{q(\mathbf{H}|X, A)} \left[ -\log(p(X, A | \mathbf{H}, S)) \right] + \text{KL}[q(\mathbf{H} | X, A) \| p(\mathbf{H})]$


### 3) Fair Representation learning
**Fairness Loss**
$
L_f = \frac{1}{|\mathcal{V}|} \sum_{i \in \mathcal{V}} \left( (1 - \lambda_s) d(z_i, \bar{z}_i) + \lambda_s d(z_i, \underline{z}_i) \right),
$\
$\lambda_s$ hyperparam control neig-preturbation weight

**Node Representations**
- $
z_i = (\phi(\mathbf{X}^{(i)}, \mathbf{A}^{(i)}))_i,
$
- $
\bar{z}_i = \text{AGG} \left( \left\{ (\phi(\mathbf{X}^{(i)}_{S_i \leftarrow 1-s_i}, \mathbf{A}^{(i)}_{S_i \leftarrow 1-s_i}))_i \right\} \right),
$
- $
\underline{z}_i = \text{AGG} \left( \left\{ (\phi(\mathbf{X}^{(i)}_{S_i \leftarrow \text{SMP}(S^{(i)}_{\mathcal{V}^{(i)}_{\setminus i}})}, \mathbf{A}^{(i)}_{S_i \leftarrow \text{SMP}(S^{(i)}_{\mathcal{V}^{(i)}_{\setminus i}})})_i \right\} \right),
$

Prediction Loss
$L_p = \frac{1}{n} \sum_{i \in [n]} l(f(z_i), y_i),$ $l$: could be CE(Cross entropy), $f(\cdot)$ makes predictions for downstream tasks with the representations, i.e.$ \hat y_i=f(z_i)$

Overall Loss
$
L = L_p + \lambda L_f + \mu \| \theta \|^2,
$

### Dataset creation

Sensitive Attributes
$S_i \sim \text{Bernoulli}(p),$ $p=0.4$ percent $S_i=1$

Latent Embeddings
$Z_i \sim \mathcal{N}(0, \mathbf{I}),$ \
$\mathbf{I}$ identity, dimension of $Z_i$: $d_s=50$

Node Features
$X_i = \mathcal{S}(Z_i) + S_i \mathbf{v},$\
sampling operation $S(\cdot)$ select 25 dims from $Z_i$, $\mathbf{v} \sim \mathcal{N}(0, \mathbf{I})$

Graph Structure
$P(A_{i,j} = 1) = \sigma(\text{cos}(Z_i, Z_j) + a \mathbf{1}(S_i = S_j)),$\
$\sigma$ sigmoid function, $\mathbf{1}(S_i = S_j)==S_i = S_j. \alpha=0.01$

Node Labels
$Y_i = \mathcal{B}(w Z_i + w_s \frac{\sum_{j \in \mathcal{N}_i} S_j}{|\mathcal{N}_i|}),$\
$\mathcal{B}$ Bernulli distribution,$\mathcal{N}_i$ set of neighbors of node i $w, w_i$ weight vector

### Result
Using Synthetic dataset, Bail, Credit










## 24 Three Revisits to Node-Level Graph Anomaly Detection
Outliers, Message Passing and Hyperbolic Neural Networks

### Previous Outlier injection method
$\mathcal{G}=(\mathcal{V}, \mathcal{E}, X, y)$: vertice set, edge set, attibute matrix, label of class

- **Contextual(cntxt.) outlier injection**
Normalize features $x_i'=\frac{x_i}{||x_i||_1}$
Sample $o$ nodes from $\mathcal{V}$ as $\mathcal{V}_c$. without replacement
For node $i$ in $\mathcal{V}_c$, sample $q$ nodes from $\mathcal{V}_r=\mathcal{V}- \mathcal{V}_c$, among them choose the farthest one $j = \text{argmax}_k(||x_i'-x_k'||_2)$ to replace $x_i$ with $x_j$.

- **Strctural(stct.) outlier injection**
create $t$ groups sized $s$ with anomalous nodes.
sample $o=t\times s$ from $\mathcal{V}$ without replacement
Then randoms partition into $t$ groups.
Add edges to make them a clique(fully connected), then drop edges with $p$ probability

#### Score function
The farthest node will have large $||\tilde{\mathbf x}_i||_2$ \
A structural outlier node $i$ will have many neighbors leads to large $||\tilde{\mathbf a}_i||_1$ 


Score function: $score_{norm}(i)=\alpha||\tilde{\mathbf x}_i||_2+(1-\alpha)||\tilde {\mathbf a}_i||_1$,  $\tilde{\mathbf x}_i$: $x_i$ after outlier injection, $\tilde{\mathbf a}_i$: $a_i$ after outlier injection, $A_{ii}=1$\
where cntxt OD, $\alpha=1$, stct OD, $\alpha=0$ :  $\alpha$ ratio of two methods 


test 1: ROC-AUC
For each dataset, use original dataset v.s. l2-nrom for each $x_i$\
do anomaly injection. apply GAD Method to get  $score_{norm}$




### Novel Anomaly injection method





## Sum in terms of Dataset
从数据集的角度来说：
### FairGAD:
Reddit:
- 数据来源：Post on politic related subReddit
- Labelling Y: based on FACTOID(Sakketou et al., 2022), use the num of posted link(left or right)
- Graph construciton: 







\
\
\
\
\
\
\
\
\
\
\
\
\




# 2024.05.31 Meeting 
Preparation: 
1. 讨论对于Synthetic dataset 怎么创建的理解。
2. 对outlier dataset怎么创建的理解。
3. fair + outlier (参考FairGAD那篇的创建)

<!-- 这一周花了三四天在信一的身上，一种僭越的快乐。
体悟是， 
1. 学东西的目的性还是不够明显。
2. 边听课边看论文会岷县提高目的性和提高效率。
3. 减少过度功利的需求，学一些有趣的东西，尽量避开人。
4. 背单词。GRE要寄了。 -->


**Meeting**
1. Plan for subgroups:
Mo, We 1-2 p.m.

2. intro to all projects
HNN: Convolution $\rightarrow$ HNN
CNN(T(x)) Paralell Translation equivalence



## Dataset 

![alt text](2024-05-08-papers/image-1.png) from FairGAD(2024)
##
Pokec: 
- source paper: https://arxiv.org/pdf/2009.01454
- repo: FairGNN  https://github.com/EnyanDai/FairGNN
sampled from https://snap.stanford.edu/data/soc-Pokec.html

Bail, Credit, German:
- source paper: https://arxiv.org/pdf/2108.05233 (Dong et al. 2022)
    https://arxiv.org/pdf/1102.2166 (2012)
- repo: EDITS https://github.com/yushundong/EDITS

(感觉论文部分引用反了)

German
- source paper: https://arxiv.org/pdf/2102.13186 (2021)
- repo: NIFTY https://github.com/HongduanTian/NIFTY


UCSD34:
- repo: https://networkrepository.com/socfb-UCSD34.php



# 2024.06.03 Meeting
1. Gujing学姐的论文是 unsupervised learning，按照她在pygod里面的方法，把二分类的任务用fiarness metrix，用counterfacutal里的评判标准。EOO, SP, CF(只在Synthetic里有)

所以要写的是： 
1. Fairness metrix 的计算，多种
2. 使用各种方法跑一下数据集。得到fair和accuracy，参考别的论文。

长期任务：
1. WSDM 22' 的做counterfactual Data argumentation 和GAD的方法无关。，总的来说是在不同GAD 方法上consistently improve fairness. WSDM 是在数据集的encoding和encoding上用的fairness。 
Detection 也是用en/decoding做的？有的用GNN也就可以prediction了。可以试着画一个图。 

2. 224W可以看17-19， 21和前面encoding部分在学一下。
3. 因果推断的Counterfactual部分的公式


## Execute
6.3: 解决
1. Synthetic dataset have about $\frac{|V|^2}{2}$ edges when v=2000(paper), edge should be about 4000?
solved by Finding source code of paper in GEAR repo
2. Threading problem with python not shoot
solved by commenting the 22th line in loader.py # from ogb.nodeproppred import PygNodePropPredDataset

6.4
1. 可以使用一些方法， 
WSDM 22 GEAR 的论文里用GCN, GraphSAGE, GIN, C-ENC, FairGNN, NIFTY-GCN, NIFTY-SAGE, and GEAR
Gu 24 HNN 的论文用pygod的GAD的库
但是都没有找到相关代码 

Gear/src
- utils.py: 
    1. load_dataset, sub function
    2. accuracy
- Preprocessing.py:
    1. load_data() deal with params
    2. generate cf subgraph(无关)
    3. generate_synthetic_data
- models.py:
    1. GCN, GIN, JK, SAGE, Encoder_DGI, GraphInMax, Encoder, Classifier,
    GraphCF, 
- main.py
    1. parser.argment()
    2. evaluate: acc, fairness
    3. compute loss, evaluate sf
    4. train test

HNN_GAD
根据我的观察，这篇里面只写了自己的方法的代码。


6.5 Meeting 
决定用ray tune来调参https://pytorch.org/tutorials/beginner/hyperparameter_tuning_tutorial.html

6.7
正在写scratch_main.py
疑问：
    1. 这个train, val, test 是怎么分的,子图还是？
    ???
        evaluate和test有什么区别
    2. evaluate里的counterfactual metrix是怎么算的？
    3. Injection的参数
    4. github怎么上传
    5. 

6.11
    Paul强调SRS是为了丰富简历的，要干很多跟申研相关的事情。
    看看教授现在在干什么，fellowship是啥，，？？？？practicing interview。
    升多少学校？？？没听懂
    5-8
    16？？？

# 2024.06.12 Meeting
1. CF + gu学姐的三个方法
2. gpu的问题还没有解决
3. inject的好像不是特别影响fairness


数据集的构造方面在sensitivity group和是不是outlier之间加上casuality。FairGAD用了debiaser的方法使fairness高了一点
run Jing’s method for GAD: shengen在做
Check with Yifei for GPU：check了，现在一些model在大的数据集上还要分batch。
Check CF scores：装了两天环境，
Complete remaining experiments：没有
brainstorm so that outlier injection contains sensitivity：认为
CF using DA

Motivation： outlier detection， 
Fairnes有效的数据集：
Outlier的注入：




## 6.12 问题
### GPU
一个下午主要都在解决gpu的问题，
#### 1 
首先目前最大的谜团是Pygod中AdONE(gpu=0)这里的光谱为啥只能是0
我去找了源代码，应该可以是int cuda的id，所以理论上应该是0-7 都可以的，但是只有0可行，
主要代码\
pygod/pygod/detector/base \
pygod/utils/utility.py 的```validate_device(gpu_id)```函数```gpu_id```就是```DOMINANT(gpu=0)```里的```gpu```

#### 2
还有一个很蠢得已经被解决的问题是
为什么.sh文件会报。 之前一直不明白为什么命令行就没问题，但是.sh 就不可以，后来发信啊是模型之间的区别
    torch.cuda.OutOfMemoryError: CUDA out of memory. Tried to allocate 3.35 GiB. GPU 0 has a total capacty of 23.65 GiB of which 3.01 GiB is free. Including non-PyTorch memory, this process has 20.63 GiB memory in use. Of the allocated memory 16.79 GiB is allocated by PyTorch, and 3.35 GiB is reserved by PyTorch but unallocated. If reserved but unallocated memory is large try setting max_split_size_mb to avoid fragmentation.  See documentation for Memory Management and PYTORCH_CUDA_ALLOC_CONF
这种错， 
修改的方式是
1. 在ray tune 里把网络得大小修改小一点，并且分batch，通过在train最后释放内存
```
defv train():
    ... ...
    torch.cuda.empty_cache() 
    return
```
2. 在ray tune 分batch。在main得第一句加上
```
    os.environ['PYTORCH_CUDA_ALLOC_CONF'] = 'max_split_size_mb:128'
```

3. 本身因为dataset和model的大小不同，所以有的模型被跑出来的可行性就是要小一点
比如从synthetic < german < bail < credit < pokec
前三个是可以跑所有模型的，
但是credit不可以跑gaan, 会站600GiB的内存，guide也非常慢， credit+guide根本没上gpu？？？
玄学  

### 6.14 CF

cf_eoo, cf_dp, df, eoo, dp 在论文中分别代表什么https://arxiv.org/pdf/2201.03662

sens rate 
 
论文算cf的方法是: 
对比原图和经过修改sens feature（类似于perturbe的手法），通过$hat y$之间的来算cf

重点是如何得到 modified data， 也就是 evaluate 中的 data_cf

随机取 sens_rate * N 个节点，使$S_i$为1，剩下为0.


### GEAR配环境踩坑
pyg很烦人
我是先装了torch1.6.0 + cu10.2
然后发现pyg=1.3.0 是最老版本的，就google到了pyg的的source code ： https://github.com/pyg-team/pytorch_geometric/releases/tag/1.3.0
然后就应该python setup.py install,但是**网很慢**， 所以要多等一会
然后看到readme之后手动装了个torch-sparse一类的whl： https://data.pyg.org/whl/
后来很傻的才发现python setup.py install，等了3分钟之后报错，无pytest-runner， 于是进setup.py看了一下之后手动pip install pytest-runner pytest pytest-cov mock,
然后python setup.py install一下子就好了，于是又手动 pip install pandas matplotlib Cpython cytoolz aif360



装到aif360 报错Failed building wheel for llvmlite，应该是没有llvm，于是手动本地装
装了9.0.0的版本
    
    如果 `llvmlite` 的预构建二进制文件和 `conda` 方法都无法解决问题，普通用户可以在用户目录中安装 LLVM，而不需要 `sudo` 权限。
    

    
    ```bash
    # 下载并解压 LLVM
    wget https://github.com/llvm/llvm-project/releases/download/llvmorg-11.1.0/llvm-11.1.0.src.tar.xz
    tar -xf llvm-11.1.0.src.tar.xz
    
    # 创建构建目录
    mkdir llvm-11.1.0.build
    cd llvm-11.1.0.build
    
    # 配置编译（安装在用户目录）
    cmake -G "Unix Makefiles" -DCMAKE_INSTALL_PREFIX=$HOME/llvm ../llvm-11.1.0.src
    
    # 编译和安装
    make -j$(nproc)
    make install
    ```
    
    然后设置环境变量以使用本地安装的 LLVM：
    
    ```bash
    export PATH=$HOME/llvm/bin:$PATH
    export LD_LIBRARY_PATH=$HOME/llvm/lib:$LD_LIBRARY_PATH
    ```
    

    
    ```bash
    pip install llvmlite --no-binary llvmlite
    ```
    
    之后再安装 `aif360`：
    
    ```bash
    pip install aif360
    ```

但是还是会报wheel build 失败的错误。
于是就直接绕过aif360,因为只用了两个函数，所以直接复制函数和必要的util过来了，绕过安装aif360的问题了。
实际上aif360对python 3.8之后才比较兼容，所以以后用新一点的环境。

然后遇到了AttributeError: Can’t get attribute ‘DataEdgeAttr’
import torch_geometric.transforms as T
from ogb.nodeproppred import PygNodePropPredDataset
shouju学姐提醒可以csdn，（这次提供的解决方案确实和gpt不一样）https://blog.csdn.net/oqqENvY12/article/details/129786928 也有一部分版本过老的问题
但是通过观察，是路径问题，把一个相对main.py line 541的相对路径改成绝对路径就成功了，
我觉得**13.23的服务器在路径上确实有些玄乎**

 - 运行结束之后没有办法自动关闭
 - german 数据集无法正常生成







### Gu学姐的三个model
万能的CSDN
Collecting package metadata (current_repodata.json): - WARNING conda.models.version:get_matcher(546): Using .* with relational operator is superfluous and deprecated and will be removed in a future version of conda. Your spec was 1.7.1.*, but conda is ignoring the .* and treating it as 1.7.1
https://blog.csdn.net/ermmtt/article/details/132628639


### Batch问题



### Python 插件
这个是最傻的，下载了 vsix 之后发现 vscode 版本对不上， 然后更新了一下 vscode 就好了。。。



# 2024.06.24 Meeting
## 2024.06.19
(刚刚才了解 Encoder 和 Decoder 也算是 GNN，然后看了一些东西
(OI佬写的GEAR代码，看不懂，



# 2024.07.14
<!-- 竟然过了一个月了。 -->

## 2024.06.10开会
1. 做benchmark. + Jing学姐的三个HNN已经改成了Class但是AUC还是太低了。。。
2. 手写encoder和decoder。结构未知，但是主要是修改Loss Function???基于CF的，可以在dominant上修改
3. 解释为什么CF是低的，看decoder出来的sens'，是还原了sens还是都是1/2.这两者都是可以解释的
4. 在学一下CF之类的理论。
5. GNNNNNNNNNN






# 2024.08.15
<!-- 竟然又过了一个月了。 -->
<!-- 抽象，完全不知道自己在干啥。。。 -->

1.  DOIMINANT 19, DONE 21, gadnr 24, ada-gad 234. (CFGN denied)
2.  benchmark和一些sens reconstruct 的值对比（之前貌似只作了guide 21的）
3.  论文也看不出来在写啥
4.  

08.18 交srs报告
08.25 GRE 考试，寄
找sol教授询问music tech方向的问题
论文论文论文







