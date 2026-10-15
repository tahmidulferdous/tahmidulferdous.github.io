---
title: Tahmidul Bin Ferdous
---

I recently completed a BSc in Computer Science and Engineering at International Islamic University,Chittagong, Bangladesh, where my undergraduate thesis audited data leakage in deep learning models
for lung cancer CT classification. I am currently a student researcher at EliteLab, and I am applying for PhD study in the United States for Fall 2027 entry.

My research centers on building parameter-efficient deep learning architectures and auditing the reliability of clinical AI benchmarks. I am particularly interested in uncovering where high benchmark metrics mask underlying shortcut learning or evaluation flaws.

In my undergraduate thesis on 3 class lung cancer CT classification, I designed a lightweight hybrid architecture combining **Depthwise Separable Convolutions and Mamba(**[**link**](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/dsmat-mamba)**)**, compressing a **14M+ parameter baseline(**[**link**](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/6287639/10820123/11008645/chowd.t10-3572423-large.gif)**) down to  1M parameters** while matching state of the art accuracy. Rather than accepting these high metrics at face value, I audited the models using **Grad-CAM saliency maps** and discovered severe **shortcut learning outside the lung Region of Interest (ROI)**.

To test whether severe minority-class imbalance (Benign cases) was driving this behavior, I reformulated a generative oversampling pipeline tired **DDPM** ([link](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/blob/master/extra_experiments/diffusion/README.md)), even tried **Rectified Flow(**[**link**](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/rectified-flow)**)** for good FID and fast generation,migrated training from PyTorch on dual T4 GPUs to **JAX(**[**link**](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/blob/master/extra_experiments/rectified-flow/code/rectified-flow-tpu.ipynb)**) on TPUs** cutting training time by **70% (from 3 days to under 24 hours)**. When Grad-CAM revealed that background shortcuts persisted even under synthetic balancing, I audited the dataset protocol itself across **25+ tracked experiments (Weights & Biases)**. By replacing naive slice level random splits with strict sequential split isolation, I demonstrated that published SOTA claims on this benchmark are heavily inflated by **slice-level data leakage** across CNNs, ViTs, and Mamba architectures alike.


## Code and experiment logs

Everything below is public, with the code as it ran, the metrics for every training run, and the
figures those runs produced.

- [lung-ct-data-leakage-study](https://github.com/tahmidulferdous/lung-ct-data-leakage-study) -
  the thesis: 188 runs across nine experiments, including the generative augmentation work.
- [ml-research-log](https://github.com/tahmidulferdous/ml-research-log) - the wider record: 250
  tracked runs across 14 projects, plus the Kaggle notebooks behind them.

## Research interests

- Evaluation validity, benchmark contamination, and measurement integrity in machine learning
- Technical AI safety, alignment, and red-teaming
- mechanistic interpretability
- Generative modelling : diffusion, flow matching 
- Efficient and distributed training

## Education

**BSc in Computer Science and Engineering**, International Islamic University Chittagong, 2022–2026.
