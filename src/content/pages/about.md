---
title: Tahmidul Bin Ferdous
---

I recently completed a BSc in Computer Science and Engineering at International Islamic University
Chittagong, Bangladesh, where my undergraduate thesis audited data leakage in deep learning models
for lung cancer CT classification. I am currently a student researcher at EliteLab, and I am applying for PhD study in the United States for Fall 2027 entry.

My work is about whether machine learning evaluations measure what they claim to measure. My
thesis took a widely used lung cancer CT benchmark and showed that a substantial part of its
reported accuracy and nearly all of its reported minority-class performance was an artefact of
how the data was partitioned rather than a property of the models. Holding architecture,
preprocessing, augmentation and hyperparameters fixed across four architecture families spanning
two orders of magnitude in parameter count, replacing a random split with a deterministic ordering
split cost roughly 7.5 accuracy points and halved minority-class F1, with the failure concentrated
exactly where aggregate accuracy hides it. That result generalises: benchmark contamination,
train test overlap, and evaluation gaming are the same failure mode wherever they appear.

I want to work on measurement validity for frontier systems evaluation integrity, benchmark
contamination, interpretability, and AI security. Alongside the thesis I have built transformers,
DCGANs, WGAN-GP, denoising diffusion models, and rectified flow from the papers rather than from
reference implementations, and ported a full training pipeline from PyTorch to JAX on 8× TPU v5e.
All of it roughly 81 GPU-hours across 250 tracked experiments ran on free-tier Kaggle and Colab
compute from a laptop with integrated graphics.

[Download my CV](/files/CV_Tahmidul_Bin_Ferdous.pdf) · [ORCID 0009-0001-1459-4124](https://orcid.org/0009-0001-1459-4124) · tahmidul.ferdous.edu@gmail.com

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
- Interpretability
- Generative modelling -diffusion, flow matching, GANs
- Efficient and distributed training

## Education

**BSc in Computer Science and Engineering**, International Islamic University Chittagong, 2022–2026.
CGPA 3.311 / 4.00, 163 credits. Thesis grade A. Supervisor: Md. Khaliluzzaman.
