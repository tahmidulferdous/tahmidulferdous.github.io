---
title: "Rectified Flow for Conditional CT Synthesis"
excerpt: "Class-conditional flow matching from scratch; DDP on 2× T4, ported to JAX on 8× TPU v5e.<br/>"
collection: portfolio
---

Implemented class-conditional Rectified Flow (flow matching) from the paper — linear interpolant, velocity objective, logit-normal timestep sampling, Euler and midpoint solvers, and EMA weights.

Built the complete training stack in PyTorch using DistributedDataParallel across 2× NVIDIA Tesla T4 GPUs with mixed precision, checkpointing, and experiment tracking. Ported the model to JAX/Flax for 8× TPU v5e, reaching 576 images/s and 2.50 s/epoch against 15.5 s/epoch on 2× T4. Built a class-conditional DDPM baseline for comparison.

**Code and runs:** [extra_experiments/rectified-flow](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/main/extra_experiments/rectified-flow)
