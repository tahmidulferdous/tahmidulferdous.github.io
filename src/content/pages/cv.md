---
title: CV
---

[Download the PDF version](https://tahmidulferdous.github.io/files/academic_cv_tahmidul.pdf)

## Education

- BSc in Computer Science and Engineering, International Islamic University Chittagong (IIUC), Chittagong, Bangladesh _(2022 to 2026)_
    - Undergraduate Thesis: _“Detecting Data Leakage in Lung Cancer CT Classification: A Patient-Level Evaluation of CNN, EfficientNet, and Vision Transformer Models.”_
    - GPA: 3.31 / 4.00

## Technical Skills

- Programming Languages: Python (primary, 250+ logged experiments), C++, SQL, Bash/Shell, LaTeX.
- Deep Learning Frameworks: PyTorch (advanced), JAX/Flax, Optax, torchvision, timm, TensorFlow/Keras, Hugging Face.
- Computer Vision and ML Libraries: OpenCV, MediaPipe, Ultralytics YOLOv11, scikit-learn, Albumentations, NumPy, Pandas, Matplotlib.
- Systems and Infrastructure: Distributed Data Parallel (`torchrun`, multi-GPU DDP), Google Cloud TPU v5e-8 (8-device `jax.pmap`), mixed precision (AMP / BF16), [Weights and Biases (250+ tracked runs)](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects), Git, Docker, Linux/Ubuntu.
- Models Built from Scratch: Mamba-Transformer hybrid (DSMaT-Pico and DSMaT-Nano), multi-teacher knowledge distillation, class-conditional rectified flow (flow matching with Euler ODE solvers), conditional DDPM, autoregressive decoder Transformer (GPT-1), WGAN-GP, DCGAN.

## Research and Professional Experience

### EliteLab, Remote

Student Researcher _(2026 to Present)_

### Outlier AI, Remote

AI Data Quality and Alignment Specialist _(November 2024 to February 2025)_

- Audited and curated large-scale human preference and reasoning datasets used for Reinforcement Learning from Human Feedback (RLHF) and post-training alignment.
- Refined multi-turn annotation guidelines, which reduced prompt ambiguity and improved inter-annotator reliability across reasoning benchmarks.

## Research and Engineering Projects

### Data Leakage Audit in Lung Cancer CT Classification (Undergraduate Thesis) _(Sep 2025 to Jun 2026)_

_PyTorch, timm, CCAL, EfficientNet B0 to B4, ViT-B/16, Grad-CAM, Weights and Biases (188 runs)_ | [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study) | [W&B Logs](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects)

- Used the hypergeometric distribution to show that standard 80/20 slice-level splits on the IQ-OTH/NCCD lung CT dataset (1,097 slices, 110 patients) leak 83.5% of minority Benign patients across the train and test sets.
- Audited 11 architectures across 4 model families (CCAL dual-CNN with MHA, EfficientNet B0 to B4, ViT-B/16, ViT-B/32, ViT-L/16, and a PLOS ONE 4-block CNN) under paired leaky 80/20 and sequential case-order 70/20/10 splits. Test accuracy dropped by 6.07 to 18.28 percentage points (CCAL from 99.55% to 85.71%; EfficientNet-B0 from 98.64% to 91.07%), and Benign F1 fell from the 0.66 to 0.98 range to the 0.17 to 0.62 range.
- Conducted Grad-CAM saliency and MHA attention-weight diagnostics.

### DSMaT (MambaVision-Hybrid) and Multi-Teacher Knowledge Distillation _(Jan 2026 to Mar 2026)_

_PyTorch, 2D Selective SSM (Mamba), Windowed Self-Attention, KL Distillation_ | [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study) | [W&B Logs](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/DSMaT-LungCancer)

- Engineered DSMaT-Pico (0.84M params) and DSMaT-Nano (2.04M params) from scratch by combining depthwise separable convolutions (Stages 1 and 2) with symmetric 2D Mamba selective scans and windowed self-attention (`MMSS`, Stages 3 and 4). The models reach 97.58% stratified test accuracy at 4.8x to 17x smaller size than the EfficientNet-B0 and CCAL baselines.
- Built a multi-teacher knowledge distillation pipeline (T = 4.0, α = 0.3) that distills an ensemble of EfficientNet-B0, DenseNet-121, and ConvNeXt-Tiny (38.8M combined) into a 0.35M-parameter ShuffleNetV2-0.5x student. On the strict sequential split, the student outperformed the best individual teacher (88.39% vs. 87.50% accuracy, Benign F1 from 0.3636 to 0.5833, 0.9646 AUC) at 20.2x parameter compression.

### Conditional Rectified Flow and DDPM for Minority-Class CT Synthesis (GPU DDP to TPU v5e-8) _(Feb 2026 to Mar 2026)_

_PyTorch DDP, JAX/Flax (`pmap`), Google Cloud TPU v5e-8, 2x Tesla T4, W&B (23 runs, 36.3 GPU/TPU-hrs)_ | [RF Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/rectified-flow) | [DDPM Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/diffusion) | [W&B (RF)](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/ct-rectified-flow) | [W&B (DDPM)](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/ct-diffusion-augmentation)

- Implemented a 35.72M-parameter class-conditional DDPM (T = 1000) and reformulated it as rectified flow: straight-line interpolation between data and noise (x(t) = (1 - t)x(0) + tε), logit-normal timestep sampling, and a 50-step Euler ODE solver that samples 20x faster. Resolved a classifier-free guidance null-token index collision (null token index 3), which raised downstream DenseNet-121 sequential-split accuracy to 88.39% with 0.6667 Benign F1, ahead of classical augmentation.
- Scaled the conditional U-Net to 73.46M parameters at native 224x224 resolution. Diagnosed a `torch.compile` CUDA Graph memory-pool OOM on 2x Tesla T4 GPUs (33.5 s/epoch over 873 epochs), then ported the full training and fused-CFG pipeline to native JAX/Flax (`jax.pmap`) on an 8-core Google Cloud TPU v5e-8, for a 13.4x speedup (2.50 s/epoch). Training completed 3,000 epochs in 2.1 hours (best loss 0.0923).

### BanglaPoemGPT: 10M-Parameter Autoregressive Transformer from Scratch _(March 2025)_

_Python, PyTorch, Kaggle P100 (4 runs, 2.0 GPU-hours)_ | [Code](https://github.com/tahmidulferdous/bangla-gpt-from-scratch)

- Implemented a GPT-1 architecture from scratch, without high-level library wrappers: multi-head causal self-attention, learned positional embeddings, a custom tokenizer, and an autoregressive generation loop. Trained on a 3M-token Bengali poetry corpus to a validation cross-entropy loss of 1.693.

### Edge Vision: YOLOv11 Campus Security and Facial Biometric Systems _(Oct 2024 to Nov 2024)_

_YOLOv11, OpenCV, FaceNet, PyTorch_ | [Code](https://github.com/tahmidulferdous/yolo11-idcard-detection), [Kaggle](https://www.kaggle.com/code/tahmidulkashfi/iiuc-idcard-v2-0-38map95) | Demos: [ID Card Detection](https://www.linkedin.com/feed/update/urn:li:activity:7252285574110171137/), [Facial Attendance](https://www.linkedin.com/feed/update/urn:li:activity:7257462743069270016/)

- Curated, annotated, and trained custom YOLOv11-s/m models for campus ID compliance monitoring (mAP50 = 0.82), and built an edge facial recognition pipeline using SSD detectors and FaceNet 128-d cosine similarity matching.

### Generative Adversarial Networks: Bengali Digits and Faces _(Nov 2024)_

_PyTorch, DCGAN, WGAN-GP, Weights and Biases (42 runs)_ | [Code (Digits)](https://github.com/tahmidulferdous/bengali-digit-gan), [Code (Faces)](https://github.com/tahmidulferdous/wgan-face-generation)

- Implemented DCGAN and WGAN-GP (gradient penalty, critic loop) from scratch to generate handwritten Bengali digits and face images, comparing training stability across adversarial objectives.

## Certifications

- CS231n: Deep Learning for Computer Vision; DeepLearning.AI Specializations (Coursera): [Neural Networks and Deep Learning](https://www.coursera.org/account/accomplishments/certificate/Z8ERPLQ3CLFZ), [Improving Deep Neural Networks: Tuning, Regularization, Optimization](https://www.coursera.org/account/accomplishments/certificate/PH5R5XW9ZUC3), [Convolutional Neural Networks](https://www.coursera.org/account/accomplishments/certificate/URKXK7BZC8JY), [Sequence Models](https://www.coursera.org/account/accomplishments/certificate/VG3F3QYWC9PG); [Data Scientist Machine Learning](https://www.codecademy.com/profiles/kashfi20/certificates/8e9e59de3f924b33ad2371faf667129b) (Codecademy).

## Academic References

- Dr. Md. Khaliluzzaman, Associate Professor, Department of CSE, International Islamic University Chittagong (IIUC) (`khalil@iiuc.ac.bd`)
- Dr. Abu Nowshed Chy, Assistant Professor, Department of CSE, University of Chittagong (CU) (`nowshed@cu.ac.bd`)
