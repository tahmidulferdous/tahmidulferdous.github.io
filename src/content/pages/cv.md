---
title: CV
---

[Download the PDF version](/files/academic_cv_tahmidul.pdf)

## Education

* **BSc in Computer Science & Engineering** — International Islamic University Chittagong (IIUC), Chittagong, Bangladesh _(2022 – 2026)_
    * **Undergraduate Thesis:** _"Detecting Data Leakage in Lung Cancer CT Classification: A Patient-Level Evaluation of CNN, EfficientNet, and Vision Transformer Models."_
    * **GPA:** 3.31 / 4.00

## Technical Skills

* **Programming Languages:** Python (Primary, 250+ logged experiments), C++, SQL, Bash/Shell, LaTeX.
* **Deep Learning Frameworks:** PyTorch (Advanced), JAX/Flax, Optax, torchvision, timm, TensorFlow/Keras, Hugging Face.
* **Computer Vision & ML Libraries:** OpenCV, MediaPipe, Ultralytics YOLOv11, scikit-learn, Albumentations, NumPy, Pandas, Matplotlib.
* **Systems & Infrastructure:** Distributed Data Parallel (`torchrun`, multi-GPU DDP), Google Cloud TPU v5e-8 (8-device `jax.pmap`), Mixed Precision (AMP / BF16), [Weights & Biases (250+ tracked runs)](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects), Git, Docker, Linux/Ubuntu.
* **Models Built from Scratch:** Mamba-Transformer Hybrid (**DSMaT-Pico/Nano**), Multi-Teacher Knowledge Distillation, Class-Conditional Rectified Flow (Flow Matching with Euler ODE solvers), Conditional DDPM, Autoregressive Decoder Transformer (GPT-1), WGAN-GP, DCGAN.

## Research & Professional Experience

### EliteLab — _Remote_

**Student Researcher** _(2026 – Present)_


### Outlier AI — _Remote_

**AI Data Quality & Alignment Specialist** _(November 2024 – February 2025)_

* Audited and curated large-scale human preference and reasoning datasets utilized for Reinforcement Learning from Human Feedback (RLHF) and post-training alignment.
* Refined multi-turn annotation guidelines, directly mitigating prompt ambiguity and improving inter-annotator reliability across reasoning benchmarks.

## Research & Engineering Projects

### Data Leakage Audit in Lung Cancer CT Classification (Undergraduate Thesis) _(Sep 2025 – Jun 2026)_

_PyTorch, timm, CCAL, EfficientNet B0–B4, ViT-B/16, Grad-CAM, Weights & Biases (188 runs)_ | [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study) | [W&B Logs](https://forge.coreweave.com/wandb/tahmidulkashfi15-international-islamic-university-chittagong/projects)

* Derived via the hypergeometric distribution that standard 80/20 slice-level splits on the IQ-OTH/NCCD lung CT dataset (1,097 slices, 110 patients) leak **83.5% of minority Benign patients** across train and test sets.
* Audited 11 architectures across 4 model families (CCAL dual-CNN + MHA, EfficientNet B0–B4, ViT-B/16, ViT-B/32, ViT-L/16, and a PLOS ONE 4-block CNN) under paired leaky 80/20 vs. sequential case-order 70/20/10 splits, showing test accuracy drops of **6.07 to 18.28 percentage points** (CCAL 99.55% → 85.71%; EfficientNet-B0 98.64% → 91.07%) and Benign F1 collapse from **0.66–0.98 down to 0.17–0.62**.
* Conducted Grad-CAM saliency and MHA attention-weight diagnostics plus an AI-assisted post-mortem code audit, uncovering peripheral chest-wall/scanner-table shortcut learning and ASCII filename boundary-cutting artifacts.

### DSMaT (MambaVision-Hybrid) & Multi-Teacher Knowledge Distillation _(Jan 2026 – Mar 2026)_

_PyTorch, 2D Selective SSM (Mamba), Windowed Self-Attention, KL Distillation, Weights & Biases_ | [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study)

* Engineered **DSMaT-Pico (0.84M params)** and **DSMaT-Nano (2.04M params)** from scratch by hybridizing Depthwise Separable Convolutions (Stages 1–2) with symmetric 2D Mamba Selective Scans and Windowed Self-Attention (`MMSS`, Stages 3–4), reaching **97.58%** stratified test accuracy at **4.8×–17× smaller size** than EfficientNet-B0 and CCAL baselines.
* Built a Multi-Teacher Knowledge Distillation pipeline ($T=4.0, \alpha=0.3$) distilling an ensemble of `EfficientNet-B0`, `DenseNet-121`, and `ConvNeXt-Tiny` (38.8M combined) into a **0.35M-parameter `ShuffleNetV2-0.5x` student**, outperforming the best individual teacher on the strict sequential split (**88.39% vs. 87.50% accuracy**, Benign F1 0.3636 → 0.5833, 0.9646 AUC) at **20.2× parameter compression**.

### Conditional Rectified Flow & DDPM for Minority-Class CT Synthesis (GPU DDP → TPU v5e-8) _(Feb 2026 – Mar 2026)_

_PyTorch DDP, JAX/Flax (`pmap`), Google Cloud TPU v5e-8, 2× Tesla T4, W&B (23 runs, 36.3 GPU/TPU-hrs)_ | [RF Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/rectified-flow) | [DDPM Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/master/extra_experiments/diffusion)

* Implemented a 35.72M Class-Conditional DDPM ($T=1000$) and reformulated it into straight-line **Rectified Flow** ($x_t = (1-t)x_0 + t\epsilon$, Logit-Normal timestep sampling, 50-step Euler ODE solver, **20× faster sampling**); resolved a Classifier-Free Guidance null-token index collision (`null_class=3`) to boost downstream `DenseNet-121` sequential-split accuracy to **88.39%** and **0.6667 Benign F1** (surpassing classical augmentation).
* Scaled the Conditional U-Net to **73.46M parameters at native 224×224 resolution**: after diagnosing a `torch.compile` CUDA Graph memory-pool OOM on 2× Tesla T4 GPUs (33.5s/epoch over 873 epochs), ported the full training and fused-CFG pipeline to **native JAX/Flax (`jax.pmap`) on an 8-core Google Cloud TPU v5e-8**, achieving a **13.4× speedup (2.50s/epoch)** and completing 3,000 epochs in 2.1 hours (`best_loss = 0.0923`).

### BanglaPoemGPT — 10M-Parameter Autoregressive Transformer from Scratch _(March 2025)_

_Python, PyTorch, Kaggle P100 (4 runs, 2.0 GPU-hours)_ | [Code](https://github.com/tahmidulferdous/bangla-gpt-from-scratch)

* Engineered a GPT-1 architecture from first mathematical principles without high-level library wrappers: multi-head causal self-attention, learned positional embeddings, custom tokenizer, and autoregressive generation loop; trained on a 3M-token Bengali poetic corpus to a validation cross-entropy loss of **1.693**.

### Edge Vision: YOLOv11 Campus Security & Facial Biometric Systems _(Oct 2024 – Nov 2024)_

_YOLOv11, OpenCV, FaceNet, PyTorch_ | [Code](https://github.com/tahmidulferdous/yolo11-idcard-detection), [Kaggle](https://www.kaggle.com/code/tahmidulkashfi/iiuc-idcard-v2-0-38map95) | Demos: [ID Card Detection](https://www.linkedin.com/feed/update/urn:li:activity:7252285574110171137/), [Facial Attendance](https://www.linkedin.com/feed/update/urn:li:activity:7257462743069270016/)

* Curated, annotated, and trained custom YOLOv11-s/m models for campus ID compliance monitoring (**mAP50 = 0.82**), and built an edge facial recognition pipeline using SSD detectors and FaceNet 128-d cosine similarity matching.

### Generative Adversarial Networks: Bengali Digits & Faces _(Nov 2024)_

_PyTorch, DCGAN, WGAN-GP, Weights & Biases (42 runs)_ | [Code (Digits)](https://github.com/tahmidulferdous/bengali-digit-gan), [Code (Faces)](https://github.com/tahmidulferdous/wgan-face-generation)

* Implemented DCGAN and WGAN-GP (gradient penalty, critic loop) from scratch to generate handwritten Bengali digits and face images, comparing training stability across adversarial objectives.

### Interactive Assistive & Real-Time Vision: Sketch AI & Face Mouse _(Aug 2024 – Nov 2024)_

_MediaPipe, OpenCV, PyAutoGUI, Python_ | Demos: [Sketch AI](https://www.linkedin.com/feed/update/urn:li:activity:7267928416534839296/), [Face Mouse](https://www.linkedin.com/feed/update/urn:li:activity:7271416959215239168/)

* Built a real-time webcam air-canvas driven by fingertip landmarks (**Sketch AI**) and a hands-free cursor controller for users with motor disabilities where nose landmarks steer the cursor and eye blinks trigger clicks (**Face Mouse**).

## Certifications

* **CS231n: Deep Learning for Computer Vision, DeepLearning.AI Specializations (Coursera):** [Neural Networks & Deep Learning](https://www.coursera.org/account/accomplishments/certificate/Z8ERPLQ3CLFZ), [Improving Deep Neural Networks (Tuning, Regularization, Optimization)](https://www.coursera.org/account/accomplishments/certificate/PH5R5XW9ZUC3), [Convolutional Neural Networks](https://www.coursera.org/account/accomplishments/certificate/URKXK7BZC8JY), [Sequence Models](https://www.coursera.org/account/accomplishments/certificate/VG3F3QYWC9PG), [Data Scientist Machine Learning](https://www.codecademy.com/profiles/kashfi20/certificates/8e9e59de3f924b33ad2371faf667129b).

## Academic References

* **Dr. Md. Khaliluzzaman** — Associate Professor, Department of CSE, International Islamic University Chittagong (IIUC) (`khalil@iiuc.ac.bd`)
* **Dr. Abu Nowshed Chy** — Assistant Professor, Department of CSE, University of Chittagong (CU) (`nowshed@cu.ac.bd`)
