---
title: Tahmidul Bin Ferdous
---

I finished a BSc in Computer Science and Engineering at International Islamic University Chittagong (IIUC) in 2026. My undergraduate thesis audited data leakage and shortcut learning in deep learning models for lung cancer CT classification. I am now a Student Researcher at EliteLab and applying for funded MS and PhD programs for 2027 entry.

**Research focus**

I look for cases where a high benchmark score comes from data leakage, shortcut learning, or an implementation bug instead of real performance. My work covers evaluation validity, small vision architectures, and flow-matching generative models for low-data clinical settings. I run experiments in PyTorch (DDP) and in JAX/Flax on TPUs.

**Undergraduate thesis and follow-up work**

My final-year project started as a leakage audit of the IQ-OTH/NCCD lung CT dataset (1,097 slices from 110 patients) and grew into four connected studies, tracked across 250+ public Weights and Biases runs.

1. Leakage audit (core thesis). Using the hypergeometric distribution, I showed that a standard 80/20 slice-level random split puts 83.5% of Benign patients (the minority class) in both the train and test sets. I compared 11 models (CCAL, PLOS CNN, EfficientNet-B0 to B4, and ViT-B/16, B/32, and L/16) on a leaky split and on a sequential case-order split. Accuracy was inflated by 6.07 to 18.28 points. CCAL dropped from 99.55% to 85.71%, and EfficientNet-B0 from 98.64% to 91.07%. Benign F1 fell from a range of 0.66 to 0.98 down to 0.17 to 0.62. Grad-CAM maps point to the chest wall and the scanner table as the shortcuts.
2. DSMaT hybrid backbones. I built DSMaT-Pico (0.84M parameters) and DSMaT-Nano (2.04M) from scratch. They combine depthwise separable convolutions, 2D Mamba selective state-space scans, and windowed self-attention, and reach 97.58% stratified test accuracy while being 4.8x to 17x smaller than the EfficientNet-B0 and CCAL baselines.
3. Multi-teacher distillation. On the sequential split, I distilled EfficientNet-B0, DenseNet-121, and ConvNeXt-Tiny into a 0.35M-parameter ShuffleNetV2-0.5x. The student beat its best teacher, which has 6.96M parameters: 88.39% against 87.50% accuracy, with Benign F1 up from 0.3636 to 0.5833, at 20.2x compression.
4. Generative balancing and TPU scaling. I trained a 35.72M-parameter class-conditional DDPM (T=1000) and reformulated it as rectified flow with 50 Euler steps and logit-normal timestep sampling, which samples 20x faster. I also fixed a classifier-free guidance bug where the null token collided with class index 3. After the fix, a downstream DenseNet-121 reached 88.39% accuracy and 0.6667 Benign F1 on the sequential split, ahead of classical augmentation. Scaling a 73.46M-parameter U-Net to 224x224 hit VRAM limits with torch.compile CUDA graphs on two Tesla T4 GPUs (33.5 s/epoch), so I ported the pipeline to JAX/Flax with jax.pmap on a Cloud TPU v5e-8. It ran 13.4x faster (2.50 s/epoch) and finished 3,000 epochs in 2.1 hours (best loss 0.0923).

**Code, logs, and dashboards**

lung ct data leakage study: thesis and extended experiments, with 188+ W&B runs covering leakage audits, DSMaT, multi-teacher distillation, DDPM, and GPU and TPU rectified flow.
ml research log: engineering logbook and post-mortems for 250+ runs across 14 deep learning projects.
Weights and Biases dashboard: public loss curves, hardware metrics, and run configs for all 250+ experiments.

**Research interests**

Evaluation validity, benchmark contamination, and measurement integrity in ML. Efficient vision architectures: state-space models, Vision Transformers, and knowledge distillation. Generative modeling and flow matching for low-data regimes. Distributed deep learning with multi-GPU PyTorch DDP and multi-device JAX/Flax. 

**Education**

BSc in Computer Science and Engineering, International Islamic University Chittagong, 2022 to 2026.
