🌐 **English** · [简体中文](README.zh-CN.md)

# 🧭 AI Researcher Roadmap

**From deep learning fundamentals to LLMs, agents, vision-language models, and vision-language-action models.**

A four-month, research-oriented learning path for aspiring AI researchers and research interns. Nine modules connect the full model lifecycle—architecture, pre-training, post-training, inference, and evaluation—to agents, visual generation, multimodal learning, and embodied AI. Each module pairs a focused syllabus with specific course sections, foundational papers, and an experiment you can explain and reproduce.

The goal is **research and interview readiness**: derive the important ideas, read unfamiliar model code and papers, build defensible baselines, and discuss results and failures. Four months is an intensive target, not a guarantee of an internship or senior-level expertise. Prior Python experience helps; the first module builds the required math and PyTorch foundation.

## How to use this roadmap

1. Follow the modules in order. **Deep Learning → Transformer → LLM Architecture → Pre-Training → Post-Training** is the core; go deep in at least one of **Agent, VLM, or VLA**.
2. For each module, study the listed sections, read the papers for their problem, method, and limits, then complete the project to the stated outcome.
3. Keep a research log: hypothesis, baseline, data, metric, compute, result, ablation, and failure analysis. Use coding tools if helpful, but be able to explain and debug every critical part.

> **Compute note:** Start with small models and datasets. CS336 systems exercises and VLA fine-tuning may need substantial GPU resources; a careful small-scale reproduction with measured tradeoffs is a valid learning outcome. Follow each course's assignment and AI-use policies when submitting its coursework.

## Contents

- [Four-month plan](#four-month-plan)
- 🧠 [01 · Deep Learning Fundamentals](#01--deep-learning-fundamentals)
- 🔀 [02 · Transformer](#02--transformer)
- 🏗️ [03 · Modern LLM Architecture](#03--modern-llm-architecture)
- ⚙️ [04 · Pre-Training](#04--pre-training)
- 🎯 [05 · Post-Training](#05--post-training)
- 🛠️ [06 · Agent](#06--agent)
- 🎨 [07 · Generative Models](#07--generative-models)
- 👁️ [08 · Vision-Language Models](#08--vision-language-models)
- 🤖 [09 · Vision-Language-Action Models](#09--vision-language-action-models)
- [Contributing and license](#contributing-and-license)

## Four-month plan

| Weeks | Focus | Evidence of progress |
| --- | --- | --- |
| 1–3 | 🧠 01 Deep Learning Fundamentals | Reproducible PyTorch training pipeline |
| 4 | 🔀 02 Transformer | Working small causal Transformer |
| 5 | 🏗️ 03 Modern LLM Architecture | Annotated architecture comparison |
| 6–8 | ⚙️ 04 Pre-Training | Small LM, training curves, scaling and throughput notes |
| 9–11 | 🎯 05 Post-Training | SFT + DPO **or** GRPO, evaluation and ablation |
| 12 | 🛠️ 06 Agent | Benchmarked tool-using agent |
| 13 | 🎨 07 Generative Models | Small diffusion or flow experiment |
| 14 | 👁️ 08 Vision-Language Models | VLM adaptation and error analysis |
| 15–16 | 🤖 09 Vision-Language-Action Models | Simulated policy evaluation and failure analysis |

### 01 · Deep Learning Fundamentals

**Learn:** Working linear algebra, probability, gradients, maximum likelihood, cross-entropy, and KL divergence; PyTorch tensors, autograd, modules, data loading, and GPU use; MLPs, CNNs, backpropagation, initialization, normalization, residuals, dropout, SGD/AdamW, scheduling, and generalization. **Mastery:** build a complete training pipeline and diagnose unstable or overfit training.

- **Course / materials:** [Dive into Deep Learning (D2L)](https://d2l.ai/) Ch. 2–7, §§8.5–8.6 (BatchNorm and ResNet), §§12.3–12.11 (optimization), §§13.4–13.6 (hardware and multi-GPU); [Stanford CS231n (2025)](https://cs231n.stanford.edu/2025/schedule.html) Lectures 2–6 (classification, optimization, backpropagation, CNNs, ResNet).
- **Must-read papers:** [Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385); [Decoupled Weight Decay Regularization](https://arxiv.org/abs/1711.05101).
- **Hands-on project:** Use [PyTorch Examples](https://github.com/pytorch/examples) as a reference to train a CIFAR-10 classifier. **Outcome:** dataset → model → train/validation → checkpoint → error analysis; explain every loss, gradient, and optimizer step.

### 02 · Transformer

**Learn:** Token embeddings; queries, keys, values; scaled dot-product, self-, cross-, and causal attention; masking, multi-head attention, FFNs, residuals, LayerNorm, positional encoding, and encoder/decoder variants. **Mastery:** derive attention and tensor shapes, implement a causal block, and estimate attention compute and memory as sequence length changes.

- **Course / materials:** [NTU Machine Learning 2021 — Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/ml/2021-spring.php): Self-Attention (Parts 1–2), Normalization, and Transformer / Seq2Seq (Parts 1–2). The official page provides Chinese and English recordings, slides, and HW4–5.
- **Must-read paper:** [Attention Is All You Need](https://arxiv.org/abs/1706.03762).
- **Hands-on project:** Complete [CS336 Assignment 1](https://cs336.stanford.edu/) or study and extend [nanochat](https://github.com/karpathy/nanochat). **Outcome:** train a minimal Transformer language model and check masks, shapes, and loss against simple tests.

### 03 · Modern LLM Architecture

**Learn:** Decoder-only models, RoPE, RMSNorm, SwiGLU, pre-norm, MQA/GQA, KV cache, long-context tradeoffs, dense versus MoE, routing/load balance, MLA, and multi-token prediction. **Mastery:** read an unfamiliar model config and implementation, locating each component and explaining its cost or purpose.

- **Course / materials:** [Stanford CS336 (2026)](https://cs336.stanford.edu/) Lecture 3 (architectures and hyperparameters) and Lecture 4 (attention alternatives and MoE).
- **Must-read reports:** [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (dense/MoE and thinking modes); [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437) (MLA, MoE, load balancing, multi-token prediction).
- **Hands-on project:** Trace a Qwen or Llama implementation in [Hugging Face Transformers](https://github.com/huggingface/transformers), with [nanochat](https://github.com/karpathy/nanochat) as a compact comparison. **Outcome:** annotate the attention, RoPE, normalization, MLP, GQA, and LM-head paths; compare parameter and KV-cache costs.

### 04 · Pre-Training

**Learn:** Tokenization, cleaning/filtering/deduplication, data mixtures, next-token loss, perplexity, schedules, batch size, scaling laws, and compute-optimal training. Add FLOPs and memory accounting, mixed precision, FlashAttention, checkpointing, and data/model/pipeline/expert parallelism. **Mastery:** design and measure a small pre-training run, then estimate the data, compute, memory, and parallelism needed to scale it.

- **Course / materials:** [Stanford CS336 (2026)](https://cs336.stanford.edu/) Lectures 1–2 (tokenization and resource accounting), 5–9 and 11 (hardware, kernels, parallelism, scaling), 13–14 (data); Assignments 2–4 (systems, scaling, data).
- **Must-read papers:** [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556) (Chinchilla); [FlashAttention](https://arxiv.org/abs/2205.14135).
- **Hands-on project:** Use [nanochat](https://github.com/karpathy/nanochat) for a small tokenizer → pre-train → evaluate pipeline. **Outcome:** train a compute-feasible MiniLM; report loss curves, data choices, tokens/sec, memory, and at least one controlled scaling or data-mixture comparison.

### 05 · Post-Training

**Learn:** Base versus instruction models; continued pre-training; SFT, chat templates, loss masking, packing, LoRA/QLoRA; preference data, reward models, PPO, DPO; RL with verifiable rewards, GRPO, reward design, and reward hacking. Cover sampling, KV cache, prefill/decode, batching, quantization, speculative decoding, benchmark design, pass@k, and contamination. **Mastery:** run a base → SFT → DPO *or* GRPO → evaluation → inference study and explain what each stage changed.

- **Course / materials:** [Stanford CS336 (2026)](https://cs336.stanford.edu/) Lectures 10, 12, 15–16; Assignment 5 (SFT and reasoning RL; DPO in optional Part 2). [Stanford CS224R (2026)](https://cs224r.stanford.edu/) lectures on Policy Gradients, Actor-Critic, Reward Learning, RL for LLMs: Preference Optimization, and RL for LLMs: Reasoning. [Hugging Face TRL](https://huggingface.co/docs/trl/main/index): SFT, DPO, and GRPO trainer guides.
- **Must-read papers:** [LoRA](https://arxiv.org/abs/2106.09685); [Direct Preference Optimization](https://arxiv.org/abs/2305.18290); [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (reasoning RL case study).
- **Hands-on project:** Adapt a small open model with [TRL](https://github.com/huggingface/trl) or [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory), then serve it with [vLLM](https://docs.vllm.ai/). **Outcome:** compare base, SFT, and DPO/GRPO on a held-out benchmark; report an ablation, error cases, and inference cost.

### 06 · Agent

**Learn:** Agents as model–environment loops: tool/function calling, ReAct, planning, reflection, memory, retrieval/reranking, agentic RAG, API/MCP tools, and evaluation. **Mastery:** design a tool interface and a benchmarked agent, then show which component improves success rate and at what cost.

- **Course / materials:** [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction) Unit 1 (fundamentals), Unit 2.1 (smolagents), Unit 3 (agentic RAG), Unit 4 (final benchmark project), Bonus Unit 2 (observability and evaluation).
- **Must-read papers:** [ReAct](https://arxiv.org/abs/2210.03629); [Toolformer](https://arxiv.org/abs/2302.04761).
- **Hands-on project:** Build a research or retrieval agent with [smolagents](https://github.com/huggingface/smolagents). **Outcome:** benchmark against a fixed task set such as GAIA or BFCL; report task success, tool accuracy, latency/cost, and a no-tool or no-retrieval ablation.

### 07 · Generative Models

**Learn:** The autoregressive → VAE → GAN → diffusion/score → flow-matching landscape; focus on denoising, score/noise prediction, conditional generation, classifier-free guidance, latent diffusion, and vector fields. **Mastery:** explain diffusion and flow matching and implement or fine-tune a small generator with an inspectable sampling loop.

- **Course / materials:** [Stanford CS231n (2025)](https://cs231n.stanford.edu/2025/schedule.html) Lecture 13 (VAE, GAN, autoregressive models), Lecture 14 (diffusion); [Assignment 3](https://cs231n.stanford.edu/2025/assignments.html) diffusion exercise.
- **Must-read papers:** [Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239); [Flow Matching for Generative Modeling](https://arxiv.org/abs/2210.02747).
- **Hands-on project:** Train or fine-tune a small diffusion model with [Diffusers](https://github.com/huggingface/diffusers). **Outcome:** visualize denoising steps, compare two sampling settings, and explain observed quality/speed differences.

### 08 · Vision-Language Models

**Learn:** CNN/ResNet/ViT, self-supervised vision, CLIP/SigLIP/DINO, then vision encoder → connector/projector → visual tokens → LLM; contrastive alignment, instruction tuning, VQA, captioning, OCR, grounding, and video understanding. **Mastery:** identify a VLM's components, training stages, data, and losses; evaluate its failure modes on a defined vision task.

- **Course / materials:** [Stanford CS231n (2025)](https://cs231n.stanford.edu/2025/schedule.html) Lectures 8, 10, 12, 16 and [Assignment 3](https://cs231n.stanford.edu/2025/assignments.html) CLIP/DINO exercises; [Stanford CS336 (2026)](https://cs336.stanford.edu/) Lecture 17 (multimodality).
- **Must-read papers:** [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020) (CLIP); [Visual Instruction Tuning](https://arxiv.org/abs/2304.08485) (LLaVA).
- **Hands-on project:** Study [LLaVA](https://github.com/haotian-liu/LLaVA) and adapt a small open VLM to a narrow VQA or OCR dataset. **Outcome:** document encoder/connector/LLM, compare before/after results, and classify visual versus language errors.

### 09 · Vision-Language-Action Models

**Learn:** MDPs, observations/actions/trajectories, behavior cloning, imitation and offline RL, model-based RL; robot datasets, action tokens, action chunking, ACT, diffusion/flow policies, and VLA policies. Contrast discrete action tokens (OpenVLA/RT-2) with continuous action generation (π₀). **Mastery:** trace perception → representation → policy → action and evaluate a policy in simulation with clear task metrics.

- **Course / materials:** [Stanford CS224R (2026)](https://cs224r.stanford.edu/) Week 1 (MDPs/imitation), Week 2 (policy gradients/actor-critic), Week 4 (offline RL), Week 6 (model-based RL), Weeks 8–9 (robot learning and VLAs); [Stanford CS231n (2025)](https://cs231n.stanford.edu/2025/schedule.html) Lecture 17 (robot learning).
- **Must-read papers:** [OpenVLA](https://arxiv.org/abs/2406.09246); [π₀: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164).
- **Hands-on project:** Follow the [LeRobot LIBERO guide](https://huggingface.co/docs/lerobot/libero) with [LeRobot](https://github.com/huggingface/lerobot). **Outcome:** fine-tune or evaluate an available VLA policy in simulation; report per-task success, a baseline, and failure cases. The linked LIBERO setup currently requires Linux.

## Contributing and license

Corrections and carefully scoped resource updates are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). The original roadmap text is licensed under [CC BY 4.0](LICENSE); linked courses, papers, code, models, and datasets retain their own licenses and terms.
