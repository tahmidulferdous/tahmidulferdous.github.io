---
title: "Rectified Flow & DDPM for Conditional CT Synthesis (TPU v5e-8)"
excerpt: "Straight-line flow matching scaled to 73.46M U-Net on 8-core TPU v5e-8 with 13.4× speedup and 0.6667 Benign F1."
order: 2
---

Implemented a 35.72M Class-Conditional DDPM ($T=1000$) and reformulated it into straight-line **Rectified Flow** ($x_t = (1-t)x_0 + t\epsilon$, Logit-Normal timestep sampling, 50-step Euler ODE solver, **20× faster sampling**).

Diagnosed and resolved a Classifier-Free Guidance null-token index collision (`null_class=3`), which boosted downstream `DenseNet-121` sequential-split accuracy to **88.39%** and **0.6667 Benign F1**, outperforming classical data augmentation.

To scale a **73.46M-parameter U-Net to native 224×224 resolution** after diagnosing `torch.compile` CUDA Graph memory-pool OOM on 2× Tesla T4 GPUs (33.5s/epoch over 873 epochs), ported the full training and fused-CFG pipeline to **native JAX/Flax (`jax.pmap`) on an 8-core Google Cloud TPU v5e-8**, achieving a **13.4× throughput speedup (2.50s/epoch)** and completing 3,000 epochs in 2.1 hours (`best_loss = 0.0923`).

**Code and logs:** [Rectified Flow Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/rectified-flow) | [DDPM Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/diffusion) | [Public W&B Logs](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects)
