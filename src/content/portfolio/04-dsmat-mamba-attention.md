---
title: "DSMaT (Mamba-Attention Hybrid) & Multi-Teacher Distillation"
excerpt: "0.84M DSMaT-Pico (97.58%) and 0.35M ShuffleNetV2 student outperforming 6.96M DenseNet teacher via multi-teacher KD."
order: 4
---

Engineered **DSMaT-Pico (0.84M params)** and **DSMaT-Nano (2.04M params)** from scratch by hybridizing Depthwise Separable Convolutions (Stages 1–2) with symmetric 2D Mamba Selective Scans and Windowed Self-Attention (`MMSS`, Stages 3–4), reaching **97.58%** stratified test accuracy at **4.8×–17× smaller footprint** than standard EfficientNet-B0 and CCAL baselines.

To regularize models against shortcut learning on the strict sequential split, built a **Multi-Teacher Knowledge Distillation** pipeline ($T=4.0, \alpha=0.3$) distilling a 38.8M ensemble of `EfficientNet-B0`, `DenseNet-121`, and `ConvNeXt-Tiny` into a **0.35M-parameter `ShuffleNetV2-0.5x` student**. The 0.35M student surpassed its best individual 6.96M teacher on the strict sequential split (**88.39% vs. 87.50% accuracy**, boosting Benign F1 from **0.3636 to 0.5833**, 0.9646 AUC) at **20.2× parameter compression**.

**Code and runs:** [DSMaT & Distillation Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study) | [Public W&B Logs](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects)
