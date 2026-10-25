---
title: "Data Leakage Audit of a Lung Cancer CT Benchmark"
excerpt: "Hypergeometric leakage proof and controlled paired audit across 11 architectures on the IQ-OTH/NCCD benchmark."
order: 1
---

**Detecting Data Leakage in Lung Cancer CT Classification** — BSc thesis, IIUC, 2026. Grade: A.

Derived via the hypergeometric distribution that standard 80/20 slice-level splits on the IQ-OTH/NCCD lung CT dataset (1,097 slices across 110 patients) leak **83.5% of minority Benign patients** across train and test sets.

Audited 11 architectures across 4 model families (CCAL dual-CNN attention, EfficientNet B0–B4, ViT-B/16, ViT-B/32, ViT-L/16, and a PLOS ONE four-block CNN; 666K to 85.8M parameters) under paired leaky 80/20 vs. sequential case-order 70/20/10 splits with preprocessing, augmentation, and hyperparameters strictly held fixed. Test accuracy dropped by **6.07 to 18.28 percentage points** (CCAL 99.55% → 85.71%; EfficientNet-B0 98.64% → 91.07%), accompanied by a **Benign F1 collapse from 0.66–0.98 down to 0.17–0.62**. Grad-CAM saliency maps and attention weights confirmed models exploited peripheral chest-wall and scanner-table shortcuts under random splits.

**Code, run logs and figures:** [tahmidulferdous/lung-ct-data-leakage-study](https://github.com/tahmidulferdous/lung-ct-data-leakage-study) | [Public W&B Logs (188 runs)](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects)
