---
title: Tahmidul Bin Ferdous
---

I finished a BSc in Computer Science and Engineering at International Islamic University Chittagong (IIUC) in 2026. My undergraduate thesis audited data leakage and shortcut learning in deep learning models for lung cancer CT classification. I’m now a Student Researcher at EliteLab and applying for funded MS/PhD programs for 2027 entry.

**Research focus**

I study cases where a high benchmark score comes from data leakage, shortcut learning, or an implementation bug rather than real performance. My work covers evaluation validity, small vision architectures, and flow-matching generative models for low-data clinical settings. I run experiments in PyTorch (DDP) and JAX/Flax on TPUs.

**Undergraduate thesis and follow-up work**

My final-year project began as a leakage audit of the IQ-OTH/NCCD lung CT dataset (1,097 slices, 110 patients) and grew into four connected studies, tracked in 250+ public Weights & Biases runs.

1. **Leakage audit (core thesis).** Using the hypergeometric distribution, I showed that a standard 80/20 slice-level random split puts 83.5% of Benign patients (the minority class) in both train and test. I compared 11 models (CCAL, PLOS CNN, EfficientNet-B0 to B4, ViT-B/16, B/32, L/16) on a leaky split and a sequential case-order split. Accuracy was inflated by 6.07 to 18.28 points (CCAL 99.55% → 85.71%; EfficientNet-B0 98.64% → 91.07%), and Benign F1 fell from 0.66–0.98 to 0.17–0.62. Grad-CAM maps point to the chest wall and scanner table as the shortcuts.
2. **DSMaT hybrid backbones.** I built DSMaT-Pico (0.84M parameters) and DSMaT-Nano (2.04M) from scratch, combining depthwise separable convolutions, 2D Mamba selective state-space scans, and windowed self-attention. They reach 97.58% stratified test accuracy and are 4.8×–17× smaller than the EfficientNet-B0 and CCAL baselines.
3. **Multi-teacher distillation.** On the sequential split, I distilled EfficientNet-B0, DenseNet-121, and ConvNeXt-Tiny into a 0.35M-parameter ShuffleNetV2-0.5x. The student beat its best teacher (6.96M parameters): 88.39% vs. 87.50% accuracy, with Benign F1 up from 0.3636 to 0.5833, at 20.2× compression.
4. **Generative balancing and TPU scaling.** I trained a 35.72M-parameter class-conditional DDPM (T=1000), then reformulated it as rectified flow with 50 Euler steps and logit-normal timestep sampling, which samples 20× faster. Fixing a classifier-free guidance bug (the null token collided with class index 3) raised DenseNet-121 sequential-split accuracy to 88.39% with Benign F1 of 0.6667, ahead of classical augmentation. Scaling a 73.46M-parameter U-Net to 224×224 hit VRAM limits with torch.compile CUDA graphs on 2× Tesla T4s (33.5 s/epoch), so I ported the pipeline to JAX/Flax with `jax.pmap` on a Cloud TPU v5e-8. It ran 13.4× faster (2.50 s/epoch) and finished 3,000 epochs in 2.1 hours (best loss 0.0923).

**Code, logs, and dashboards**

- **lung-ct-data-leakage-study:** thesis and extended experiments (188+ W&B runs: leakage audits, DSMaT, multi-teacher KD, DDPM, GPU/TPU rectified flow).
- **ml-research-log:** engineering logbook and post-mortems covering 250+ runs across 14 deep learning projects.
- **Weights & Biases dashboard:** public loss curves, hardware metrics, and run configs for all 250+ experiments.

**Research interests**

- Evaluation validity, benchmark contamination, and measurement integrity in ML
- Efficient vision architectures (state-space models/Mamba, Vision Transformers, knowledge distillation)
- Generative modeling and flow matching (rectified flow, diffusion) for low-data regimes
- Distributed deep learning (multi-GPU PyTorch DDP, multi-device JAX/Flax on TPUs)

**Education**

BSc in Computer Science and Engineering, International Islamic University Chittagong, 2022–2026
