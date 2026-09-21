---
title: "Data Leakage Audit of a Lung Cancer CT Benchmark"
excerpt: "A controlled paired audit of four deep learning architecture families on the IQ-OTH/NCCD benchmark."
order: 1
---

**Detecting Data Leakage in Lung Cancer CT Classification** — BSc thesis, IIUC, 2026. Grade: A.

A controlled paired audit of four deep learning architecture families (a concatenated CNN-attention model, EfficientNet B0–B4, ViT-B/16, and a custom 4-block CNN; 666K to 85.8M parameters) on the IQ-OTH/NCCD lung cancer CT benchmark. Architecture, preprocessing, augmentation and hyperparameters were held fixed while only the data partitioning strategy varied. Replacing a random image-level split with a deterministic ordering split costs roughly 7.5 accuracy points and halves minority-class F1, with the failure concentrated in the smallest class and invisible to aggregate accuracy. The expected contamination rate was also derived analytically from the dataset structure using the hypergeometric distribution.

**Code, run logs and figures:** [tahmidulferdous/lung-ct-data-leakage-study](https://github.com/tahmidulferdous/lung-ct-data-leakage-study) — 188 tracked training runs, every hyperparameter and metric, the figures each run produced, and the notebooks as they ran on Kaggle.
