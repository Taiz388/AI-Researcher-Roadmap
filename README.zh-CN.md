🌐 [English](README.md) · 简体中文

# 🧭 AI Researcher Roadmap｜人工智能研究者学习路线

从深度学习基础出发，依次学习大语言模型、智能体、视觉语言模型与视觉语言动作模型。

这是一条面向人工智能研究入门者和研究实习申请者的四个月学习路线。九个模块贯通模型架构、预训练、后训练、推理与评测，再延伸到智能体、视觉生成、多模态和具身智能。每个模块只保留明确的学习范围、指定课程章节、必读论文和可检验的实践目标。中文版优先使用 B 站网课与中文书籍，便于国内学习者观看和跟学；论文与开源项目沿用英文名称和原链接。

完成这条路线的目标是建立参与研究和准备面试所需的基础：能够解释核心方法、阅读陌生论文与模型代码、建立合理基线，并分析实验结果与失败原因。四个月是高强度的建议节奏，不保证实习录取或达到资深研究员水平。建议先具备 Python 基础；第一模块会补齐必要的数学与 PyTorch 能力。

## 如何使用

1. 按顺序学习。深度学习 → Transformer → 现代大语言模型架构 → 预训练 → 后训练是主干；在智能体、视觉语言模型或视觉语言动作模型中至少选一个方向深入。
2. 每个模块先学习指定章节，再读论文的研究问题、方法和局限，最后完成实践项目并达到对应的掌握标准。
3. 记录研究日志：假设、基线、数据、指标、计算资源、结果、消融实验和失败分析。可以借助编程工具，但要能解释并调试关键实现。

> 计算资源提示：先用小模型和小数据集验证方法。CS336 的系统作业与 VLA 微调可能需要较多 GPU 资源；能够测量并解释取舍的小规模复现同样有学习价值。提交原课程作业时，请遵守其作业与 AI 工具使用规则。
>
> 视频定位提示：B 站课程的分集顺序可能与官方课表不同。若编号不同，请按列出的主题查找。

## 目录

- [四个月学习计划](#四个月学习计划)
- 🧠 [01 · 深度学习基础](#01--深度学习基础)
- 🔀 [02 · Transformer](#02--transformer)
- 🏗️ [03 · 现代大语言模型架构](#03--现代大语言模型架构)
- ⚙️ [04 · 预训练](#04--预训练)
- 🎯 [05 · 后训练](#05--后训练)
- 🛠️ [06 · 智能体](#06--智能体)
- 🎨 [07 · 生成模型](#07--生成模型)
- 👁️ [08 · 视觉语言模型](#08--视觉语言模型)
- 🤖 [09 · 视觉语言动作模型](#09--视觉语言动作模型)
- [贡献与许可](#贡献与许可)

## 四个月学习计划

| 周次 | 学习模块 | 阶段成果 |
| --- | --- | --- |
| 第 1–3 周 | 🧠 01 深度学习基础 | 可复现的 PyTorch 完整训练流程 |
| 第 4 周 | 🔀 02 Transformer | 能运行的小型因果 Transformer |
| 第 5 周 | 🏗️ 03 现代大语言模型架构 | 带注释的模型架构对比 |
| 第 6–8 周 | ⚙️ 04 预训练 | 小模型、训练曲线、规模与吞吐量分析 |
| 第 9–11 周 | 🎯 05 后训练 | 监督微调加 DPO 或 GRPO、评测与消融 |
| 第 12 周 | 🛠️ 06 智能体 | 在固定任务集上评测的工具智能体 |
| 第 13 周 | 🎨 07 生成模型 | 小规模扩散模型或流匹配实验 |
| 第 14 周 | 👁️ 08 视觉语言模型 | 模型适配与错误分析 |
| 第 15–16 周 | 🤖 09 视觉语言动作模型 | 仿真策略评测与失败分析 |

### 01 · 深度学习基础

学习内容：够用的线性代数、概率、梯度、极大似然、交叉熵与 KL 散度；PyTorch 张量、自动求导、模块、数据加载与 GPU；多层感知机、卷积网络、反向传播、初始化、规范化、残差、Dropout、SGD/AdamW、学习率调度与泛化。

掌握程度：独立完成训练流程，并定位训练不稳定或过拟合的原因。

- 课程与资料：[《动手学深度学习》中文版](https://zh.d2l.ai/)第 2–6 章、第 7.5–7.6 节（批量规范化与 ResNet）、第 11.3–11.11 节（优化）、第 12.4–12.6 节（硬件与多 GPU）；[D2L 中文视频](https://www.bilibili.com/video/BV1bdgk6wEJy/)学习对应主题；[CS231n B 站课程](https://www.bilibili.com/video/BV1W1Jc6FErS/)第 2–6 讲（分类、优化、反向传播、卷积网络、ResNet）。
- 必读论文：[Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385)；[Decoupled Weight Decay Regularization](https://arxiv.org/abs/1711.05101)。
- 实践项目：参考 [PyTorch Examples](https://github.com/pytorch/examples)训练 CIFAR-10 分类器。达标要求：完成数据集 → 模型 → 训练／验证 → 检查点 → 错误分析，并解释损失、梯度和优化器各自的作用。

### 02 · Transformer

学习内容：词元嵌入、查询／键／值、缩放点积注意力、自注意力／交叉注意力／因果注意力、掩码、多头注意力、前馈网络、残差、LayerNorm、位置编码，以及编码器和解码器结构。

掌握程度：推导注意力公式和张量维度，实现因果注意力模块，并估算序列长度变化带来的计算与显存开销。

- 课程与资料：[台大李宏毅 Transformer B 站课程](https://www.bilibili.com/video/BV1v3411r78R/)：按原课程依次学习自注意力上／下、规范化、Transformer／序列到序列模型上／下；对应课程资料含第 4–5 次作业。
- 必读论文：[Attention Is All You Need](https://arxiv.org/abs/1706.03762)。
- 实践项目：完成 [CS336 Assignment 1](https://cs336.stanford.edu/) 或研读并扩展 [nanochat](https://github.com/karpathy/nanochat)。达标要求：训练最小 Transformer 语言模型，并用简单测试核对掩码、张量维度和损失。

### 03 · 现代大语言模型架构

学习内容：仅解码器模型、RoPE、RMSNorm、SwiGLU、预规范化、MQA/GQA、KV 缓存、长上下文、稠密模型与 MoE、路由与负载均衡、MLA、多词元预测。

掌握程度：打开陌生模型的配置和源码，定位关键组件，说明各设计的作用与成本。

- 课程与资料：[CS336 B 站课程](https://www.bilibili.com/video/BV1msTD6CE6j/)第 3 讲（架构与超参数）、第 4 讲（注意力替代方案与 MoE）。
- 必读技术报告：[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)（稠密／MoE 与思考模式）；[DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437)（MLA、MoE、负载均衡、多词元预测）。
- 实践项目：在 [Hugging Face Transformers](https://github.com/huggingface/transformers) 中追踪 Qwen 或 Llama 实现，用 [nanochat](https://github.com/karpathy/nanochat)作小型对照。达标要求：标出注意力、RoPE、规范化、MLP、GQA 与语言模型输出层，并比较参数量及 KV 缓存成本。

### 04 · 预训练

学习内容：分词、数据清洗／过滤／去重、数据配比、下一词元损失、困惑度、学习率计划、批量大小、规模定律与计算最优训练；进一步掌握 FLOPs 和显存估算、混合精度、FlashAttention、梯度检查点及多种并行方式。

掌握程度：设计并测量一次小规模预训练，再估算扩大规模所需的数据、计算、显存和并行方案。

- 课程与资料：[CS336 B 站课程](https://www.bilibili.com/video/BV1msTD6CE6j/)第 1–2 讲（分词与资源核算）、第 5–9、11 讲（硬件、算子、并行、规模定律）、第 13–14 讲（数据）；对照原课程第 2–4 次作业学习系统、规模与数据。
- 必读论文：[Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556)（Chinchilla）；[FlashAttention](https://arxiv.org/abs/2205.14135)。
- 实践项目：使用 [nanochat](https://github.com/karpathy/nanochat)完成小型分词 → 预训练 → 评测流程。达标要求：训练资源可承受的小模型，报告损失曲线、数据选择、每秒词元数、显存，以及一次受控的规模或数据配比对比。

### 05 · 后训练

学习内容：基础模型与指令模型、继续预训练、监督微调、对话模板、损失掩码、样本打包、LoRA/QLoRA；偏好数据、奖励模型、PPO、DPO；可验证奖励强化学习、GRPO、奖励设计与奖励投机。同时覆盖采样、KV 缓存、预填充／解码、批处理、量化、推测解码、基准设计、pass@k 与数据污染。

掌握程度：完成基础模型 → 监督微调 → DPO 或 GRPO → 评测 → 推理实验，并解释每一步带来的变化。

- 课程与资料：[CS336 B 站课程](https://www.bilibili.com/video/BV1msTD6CE6j/)第 10、12、15–16 讲；第 5 次作业涵盖监督微调与推理强化学习，DPO 属于其可选第二部分。[CS224R B 站课程](https://www.bilibili.com/video/BV1Fzb86FEj2/)学习策略梯度、Actor-Critic、奖励学习、语言模型偏好优化与推理强化学习对应讲次。[Hugging Face TRL](https://huggingface.co/docs/trl/main/index)查阅 SFT、DPO、GRPO 训练器文档。
- 必读论文：[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)（InstructGPT：监督微调、奖励模型与 RLHF）；[LoRA](https://arxiv.org/abs/2106.09685)；[Direct Preference Optimization](https://arxiv.org/abs/2305.18290)；[DeepSeek-R1](https://arxiv.org/abs/2501.12948)（推理强化学习案例）。
- 实践项目：使用 [TRL](https://github.com/huggingface/trl) 或 [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)适配小型开放模型，再用 [vLLM](https://docs.vllm.ai/)提供推理服务。达标要求：在未见过的测试集上比较基础模型、监督微调和 DPO/GRPO，给出消融、错误案例与推理成本。

### 06 · 智能体

学习内容：将智能体理解为模型与环境之间的闭环：工具／函数调用、ReAct、规划、反思、记忆、检索与重排、智能体式 RAG、API/MCP 工具和评测。

掌握程度：设计工具接口和固定评测集，说明各组件对成功率与成本的影响。

- 课程与资料：[Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction)第 1 单元（基础）、第 2.1 单元（smolagents）、第 3 单元（智能体式 RAG）、第 4 单元（最终评测项目）、附加第 2 单元（可观测性与评测）。本模块暂无指定的 B 站替代课程。
- 必读论文：[ReAct](https://arxiv.org/abs/2210.03629)；[Toolformer](https://arxiv.org/abs/2302.04761)。
- 实践项目：用 [smolagents](https://github.com/huggingface/smolagents)构建研究或检索智能体。达标要求：在 GAIA 或 BFCL 等固定任务集上报告任务成功率、工具使用准确率、延迟／成本，并进行去掉工具或检索的消融实验。

### 07 · 生成模型

学习内容：建立自回归 → VAE → GAN → 扩散／分数模型 → 流匹配的整体认识；重点理解去噪、分数／噪声预测、条件生成、无分类器引导、潜空间扩散与向量场。

掌握程度：解释扩散与流匹配的联系和区别，实现或微调可检查采样过程的小型生成模型。

- 课程与资料：[MIT 6.S184 B 站课程](https://www.bilibili.com/video/BV1xzAFzqEbZ/)第 1–4 讲：流与扩散模型、流匹配、分数匹配及无分类器引导、潜空间与生成网络架构。VAE 在潜空间部分出现；自回归模型与 GAN 只需掌握全局概念。
- 必读论文：[Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239)；[Flow Matching for Generative Modeling](https://arxiv.org/abs/2210.02747)。
- 实践项目：用 [Diffusers](https://github.com/huggingface/diffusers)训练或微调小型扩散模型。达标要求：展示去噪过程、比较两种采样设置，并解释生成质量与速度的差异。

### 08 · 视觉语言模型

学习内容：CNN/ResNet/ViT、自监督视觉学习、CLIP/SigLIP/DINO，再理解视觉编码器 → 连接器／投影层 → 视觉词元 → 语言模型；覆盖对比对齐、指令微调、视觉问答、图像描述、文字识别、定位与视频理解。

掌握程度：指出模型的组件、训练阶段、数据和损失，并在明确的视觉任务上分析失败原因。

- 课程与资料：[CS231n B 站课程](https://www.bilibili.com/video/BV1W1Jc6FErS/)第 8、10、12、16 讲，以及第 3 次作业中的 CLIP/DINO 练习；[CS336 B 站课程](https://www.bilibili.com/video/BV1msTD6CE6j/)第 17 讲（多模态）。
- 必读论文：[An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale](https://arxiv.org/abs/2010.11929)（ViT：图像分块与视觉编码）；[Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020)（CLIP）；[BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models](https://arxiv.org/abs/2301.12597)（Q-Former 跨模态连接）；[Visual Instruction Tuning](https://arxiv.org/abs/2304.08485)（LLaVA）。
- 实践项目：研读 [LLaVA](https://github.com/haotian-liu/LLaVA)，将小型开放视觉语言模型适配到有限范围的视觉问答或文字识别数据集。达标要求：说明视觉编码器／连接器／语言模型结构，比较适配前后的结果，并区分视觉错误与语言错误。

### 09 · 视觉语言动作模型

学习内容：马尔可夫决策过程、观察／动作／轨迹、行为克隆、模仿学习、离线强化学习、基于模型的强化学习；机器人数据集、动作词元、动作分块、ACT、扩散／流策略与 VLA。比较离散动作词元路线（OpenVLA/RT-2）和连续动作生成路线（π₀）。

掌握程度：梳理感知 → 表征 → 策略 → 动作全链路，并在仿真中用明确指标评测策略。

- 课程与资料：[CS224R B 站课程](https://www.bilibili.com/video/BV1Fzb86FEj2/)第 1 周（决策过程与模仿学习）、第 2 周（策略梯度与 Actor-Critic）、第 4 周（离线强化学习）、第 6 周（基于模型的强化学习）、第 8–9 周（机器人学习与 VLA）；[CS231n B 站课程](https://www.bilibili.com/video/BV1W1Jc6FErS/)第 17 讲（机器人学习）。
- 必读论文：[RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control](https://arxiv.org/abs/2307.15818)（动作词元）；[OpenVLA](https://arxiv.org/abs/2406.09246)；[π₀: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)。
- 实践项目：按 [LeRobot LIBERO guide](https://huggingface.co/docs/lerobot/libero)使用 [LeRobot](https://github.com/huggingface/lerobot)。达标要求：在仿真中微调或评测已有 VLA 策略，报告各任务成功率、基线与失败案例。当前教程要求 Linux 环境。

## 贡献与许可

欢迎提交失效链接、课程章节修正和经过验证的资源更新。请参阅[中文贡献指南](CONTRIBUTING.zh-CN.md)。路线原创文字采用 [CC BY 4.0](LICENSE) 许可；所链接的课程、论文、代码、模型和数据集仍遵循各自的许可与使用条款。
