---
title: Tahmidul Bin Ferdous
---

I recently completed a BSc in Computer Science and Engineering at International Islamic University Chittagong (IIUC), Bangladesh, where my undergraduate thesis audited data leakage and shortcut learning in deep learning models for lung cancer CT classification. I am currently a Student Researcher at EliteLab, and I am applying for funded MS/PhD study for 2027 entry.

### Research Summary & Focus

My research centers on **evaluation validity, parameter-efficient vision architectures, and generative flow matching** for clinical and low-resource regimes. I am particularly interested in uncovering where high benchmark metrics mask underlying data leakage, shortcut learning, or implementation flaws—and engineering reproducible systems across **PyTorch DDP** and **JAX/Flax on TPUs** to test rigorous fixes.

### Undergraduate Thesis & Extended Research Arc

Rather than publishing an incremental accuracy claim on a flawed medical benchmark, I spent my final year conducting a four-stage empirical and systems investigation on the IQ-OTH/NCCD lung CT dataset (1,097 slices across 110 patients), tracked across **250+ public Weights & Biases runs**:

1. **Mathematical & Empirical Data Leakage Audit (Core Thesis):** Derived via the hypergeometric distribution that standard 80/20 slice-level random splits leak **83.5% of minority (Benign) patients** across train and test sets. Evaluating 11 models across CNNs (CCAL, PLOS CNN), EfficientNets (B0–B4), and Vision Transformers (ViT-B/16, B/32, L/16) under paired leaky vs. sequential case-order splits exposed a **6.07 to 18.28 percentage point accuracy inflation** (CCAL 99.55% → 85.71%; EfficientNet-B0 98.64% → 91.07%) and a **Benign F1 collapse from 0.66–0.98 down to 0.17–0.62**, corroborated by Grad-CAM saliency maps showing chest-wall and scanner-table shortcut learning.
2. **Parameter-Efficient Hybrid Backbones & Multi-Teacher Distillation:** Engineered **DSMaT-Pico (0.84M params)** and **DSMaT-Nano (2.04M params)** from scratch by combining Depthwise Separable Convolutions with 2D Mamba Selective State Space scans and Windowed Self-Attention, reaching **97.58%** stratified test accuracy at **4.8×–17× smaller size** than EfficientNet-B0 and CCAL baselines. To regularize models on the strict sequential split, I built a **Multi-Teacher Knowledge Distillation** pipeline (`EfficientNet-B0 + DenseNet-121 + ConvNeXt-Tiny` → **0.35M-parameter `ShuffleNetV2-0.5x`**), where the 0.35M student outperformed its best 6.96M teacher (**88.39% vs. 87.50% accuracy**, boosting Benign F1 from **0.3636 to 0.5833** at **20.2× compression**).
3. **Generative Balancing (DDPM → Rectified Flow) & JAX/TPU Scaling:** Built a 35.72M Class-Conditional DDPM ($T=1000$) and reformulated it into straight-line **Rectified Flow** ($T=50$ Euler ODE steps, Logit-Normal timestep sampling, **20× faster sampling**). Resolving a Classifier-Free Guidance null-token index collision (`null_class=3`) boosted downstream `DenseNet-121` sequential-split accuracy to **88.39%** and **0.6667 Benign F1** (surpassing classical augmentation). To scale a **73.46M-parameter U-Net to native 224×224 resolution** after hitting `torch.compile` CUDA Graph VRAM limits on 2× Tesla T4 GPUs (33.5s/epoch), I ported the full pipeline to **native JAX/Flax (`jax.pmap`) on an 8-core Google Cloud TPU v5e-8**, achieving a **13.4× throughput speedup (2.50s/epoch)** and completing 3,000 epochs in 2.1 hours (`best_loss = 0.0923`)

### Code, Experiment Logs & Dashboards

* [**lung-ct-data-leakage-study**](https://github.com/TahmidulFerdous/lung-ct-data-leakage-study)**:** Core thesis and extended experimental repository (188+ W&B runs across leakage audits, DSMaT Mamba-Transformer, Multi-Teacher KD, DDPM, and GPU/TPU Rectified Flow).
* [**ml-research-log**](https://github.com/TahmidulFerdous/ml-research-log)**:** Engineering logbook and post-mortem audit documentation spanning 250+ tracked runs across 14 deep learning projects.
* [**Weights & Biases Public Dashboard**](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects)**:** Complete public telemetry, loss curves, hardware utilization metrics, and run configs across all 250+ experiments.

### Research Interests

* Evaluation validity, benchmark contamination, and measurement integrity in machine learning.
* Efficient vision architectures (State Space Models / Mamba, Vision Transformers, Knowledge Distillation).
* Generative modeling & ODE flow matching (Rectified Flow, Diffusion Models) for low-data regimes.
* Distributed deep learning systems (multi-GPU PyTorch DDP, multi-device JAX/Flax on TPUs).
* Technical AI safety, alignment, and mechanistic interpretability.

### Education

* **BSc in Computer Science and Engineering**, International Islamic University Chittagong (2022–2026).
