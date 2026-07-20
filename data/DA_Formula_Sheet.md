# DA — Complete Subject-Wise Formula Sheet

*Built by extracting every formula/concept actually used across the 195 questions (2024–2026), then filling gaps with syllabus-adjacent formulas that weren't tested yet but are fair game. "[Tested] Tested" = confirmed appeared in 2024/2025/2026. "[Unseen] Not yet tested" = in-syllabus, high probability of appearing.*

---

## 1. PROBABILITY & STATISTICS (highest weight — learn this sheet cold)

### Basic probability rules
- $P(A\cup B) = P(A)+P(B)-P(A\cap B)$ [Unseen]
- $P(A^c) = 1-P(A)$ [Unseen]
- $P(A|B) = \dfrac{P(A\cap B)}{P(B)}$ [Tested] (2025 Q11, 2024 Q58)
- Independence: $P(A\cap B)=P(A)P(B)$ [Tested] (2026 Q19, 2026 Q44)
- **Bayes' theorem**: $P(A|B) = \dfrac{P(B|A)P(A)}{P(B)}$, with $P(B)=\sum_i P(B|A_i)P(A_i)$ (law of total probability) [Tested] (2026 Q57 — disease-test problem, 2025 Q31 — boxes/balls, 2024 Q58)

### Combinatorics (feeds both Probability & GA)
- $nPr = \dfrac{n!}{(n-r)!}$, $nCr = \dbinom{n}{r}=\dfrac{n!}{r!(n-r)!}$ [Tested] (2026 Q33 bijections, 2026 Q7 GA, 2024 Q3 GA)
- Permutations with repeated items: $\dfrac{n!}{n_1!n_2!\cdots n_k!}$ [Unseen]
- Circular permutations: $(n-1)!$ [Unseen]
- Pigeonhole principle [Tested] (2026 GA-style logic)

### Random variables — PMF/PDF/CDF
- $F_X(x)=P(X\le x)$; $f_X(x)=\dfrac{d}{dx}F_X(x)$; $P(a\le X\le b)=F_X(b)-F_X(a)$ [Tested] (2025 Q19, 2025 Q39, 2024 test)
- $\sum_x P(X=x)=1$ (discrete), $\int f_X(x)\,dx=1$ (continuous) [Unseen] — used implicitly to solve for unknown constants

### Expectation & Variance — **the most-reused toolkit in the whole paper**
- $E[X]=\sum xP(x)$ or $\int xf(x)dx$ [Tested]
- $Var(X)=E[X^2]-(E[X])^2$ [Tested] (2026 Q62)
- $E[aX+b]=aE[X]+b$, $Var(aX+b)=a^2Var(X)$ [Tested] (2026 Q34, 2025 Q20)
- **Linearity of expectation** (holds even if X, Y dependent): $E[X+Y]=E[X]+E[Y]$ [Tested]
- $Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)$ [Tested] (2024 Q56)
- $Cov(X,Y)=E[XY]-E[X]E[Y]$ [Tested]
- If independent: $Cov(X,Y)=0$, $E[XY]=E[X]E[Y]$, $Var(X+Y)=Var(X)+Var(Y)$ [Tested] (2024 Q56 X~U[1,3], Y~U[2,4] independent)
- Correlation $\rho_{X,Y}=\dfrac{Cov(X,Y)}{\sigma_X\sigma_Y}$ [Unseen]
- **Law of total expectation**: $E[E[X|Y]]=E[X]$ [Tested] (2025 Q11 — asked directly)
- **Law of total variance**: $Var(X)=E[Var(X|Y)]+Var(E[X|Y])$ [Unseen] (natural follow-up to above, not yet directly tested — learn it)

### Standard distributions — memorize this table exactly

| Distribution | PMF/PDF | Mean | Variance | Tested |
|---|---|---|---|---|
| Bernoulli(p) | $P(X{=}1){=}p$ | $p$ | $p(1-p)$ | [Tested] 2026 Q44, 2026 Q64, 2025 Q40, 2024 Q65 |
| Binomial(n,p) | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ | [Tested] 2025 Q40 (sum of Bernoullis) |
| Poisson(λ) | $\dfrac{e^{-\lambda}\lambda^k}{k!}$ | $\lambda$ | $\lambda$ | [Tested] 2024 Q11 (mean=variance property) |
| Uniform(a,b) | $\dfrac{1}{b-a}$ | $\dfrac{a+b}{2}$ | $\dfrac{(b-a)^2}{12}$ | [Tested] 2026 Q63, 2024 Q56 |
| Exponential(λ) | $\lambda e^{-\lambda x}$ | $1/\lambda$ | $1/\lambda^2$ | [Tested] 2026 Q34, 2025 Q21, 2025 Q41, 2024 Q57 |
| Normal(μ,σ²) | $\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ | [Tested] 2026 Q28, 2024 Q11 |

- **Exponential memorylessness**: $P(X>s+t\mid X>s)=P(X>t)$ [Tested] (2026 Q34 directly uses this)
- **Standardization**: $Z=\dfrac{X-\mu}{\sigma}\sim N(0,1)$ [Tested] (2026 Q28, GA z-score Q27 2024 income normalization)

### Transformation of random variables — **the single highest-ROI sub-skill; tested 3–4× every year**
- If $Y=g(X)$ is monotonic: $f_Y(y)=f_X(g^{-1}(y))\left|\dfrac{d}{dy}g^{-1}(y)\right|$ [Tested] (2025 Q36 $Y{=}Z^2$, 2025 Q41 floor function, 2026 Q63)
- Sum/product of independent RVs (convolution idea, mostly needed conceptually not computed) [Unseen]
- CDF-based approach: find $F_Y(y)=P(g(X)\le y)$ then differentiate — works even for non-monotonic $g$ (e.g. $Y=X^2$) [Tested] (2025 Q36, 2025 Q39)

### Joint / conditional distributions
- Marginal: $f_X(x)=\int f_{X,Y}(x,y)\,dy$ [Tested] (2024 Q59)
- Conditional: $f_{Y|X}(y|x)=\dfrac{f_{X,Y}(x,y)}{f_X(x)}$ [Tested] (2024 Q59, 2026 Q63)
- $E[Y|X{=}x]=\int y\,f_{Y|X}(y|x)\,dy$ [Tested] (2024 Q59)
- Chain rule of joint distributions (needed for Bayesian networks too): $P(U,V,W,X,Y)=P(U)P(V)P(W|U,V)P(X|W)P(Y|W)$ [Tested] (2024 Q24)

### Sampling & estimators
- Sample mean $\bar X=\frac1n\sum X_i$; $E[\bar X]=\mu$; $Var(\bar X)=\sigma^2/n$ [Unseen]
- **Running/updated mean trick**: new mean after adding one point $= \dfrac{n\cdot\bar X_{old}+x_{new}}{n+1}$ [Tested] (2024 Q34, 2025-style)
- Bias of estimator: $Bias(\hat\theta)=E[\hat\theta]-\theta$ [Tested] (2025 Q54 — coin-toss $\hat p$)
- Unbiased sample proportion: $\hat p=\frac1n\sum X_i$ is unbiased for Bernoulli mean [Tested] (2025 Q54)
- z-score normalization: $z=\dfrac{x-\mu}{\sigma}$ [Tested] (2024 Q27 — income normalization)
- Sum of squares identity: $\sum_i\sum_j(x_i-x_j)^2 = 2n\sum_i(x_i-\bar x)^2$ [Tested] (2026 Q62 — exact identity tested)

---

## 2. LINEAR ALGEBRA

### Matrix arithmetic basics
- $(AB)^T=B^TA^T$ [Unseen]
- Trace: $tr(A)=\sum a_{ii}$; $tr(AB)=tr(BA)$ [Unseen] (needed for eigenvalue-sum shortcut)
- Determinant (2×2): $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$ [Tested] (2024 Q13)
- $\det(AB)=\det(A)\det(B)$, $\det(A^{-1})=1/\det(A)$, $\det(A^T)=\det(A)$, $\det(kA)=k^n\det(A)$ [Unseen]
- Inverse: $A^{-1}=\dfrac{1}{\det A}\,adj(A)$; $(AB)^{-1}=B^{-1}A^{-1}$ [Unseen]

### Rank, solutions of $Ax=b$
- Consistent iff $rank(A)=rank([A|b])$ [Tested] (2025 Q13 — $Bx=0$ solvability)
- Unique solution iff that rank $=n$ (# unknowns); infinite solutions iff rank $<n$; no solution iff $rank(A)<rank([A|b])$ [Tested] (2025 Q13, 2024 Q48)
- **Rank–nullity theorem**: $rank(A)+nullity(A)=n$ [Tested] (2025 Q28)

### Eigenvalues / eigenvectors — **very high yield, appears almost every paper**
- $Av=\lambda v \Rightarrow \det(A-\lambda I)=0$ [Tested] (2024 Q13, 2026 Q46)
- **Sum of eigenvalues = trace(A)**; **product of eigenvalues = det(A)** [Tested] (2026 Q46 — rotation-like matrix)
- Eigenvalues of $A^k$ are $\lambda^k$; eigenvalues of $A^{-1}$ are $1/\lambda$; eigenvalues of $cA$ are $c\lambda$ [Tested] (2025 Q37 $A^3=A \Rightarrow \lambda^3=\lambda \Rightarrow \lambda\in\{0,1,-1\}$)
- Eigenvalues of matrix polynomial $p(A)$ are $p(\lambda)$ for each eigenvalue $\lambda$ of $A$ [Tested] (2024 Q35 $\det(M^2+12M)$, 2025 Q13 $B=A^3-2A^2+A$)
- Symmetric matrix → real eigenvalues, eigenvectors orthogonal [Unseen]
- **Orthogonal matrix**: $A^TA=I$; all $|\lambda|=1$; rotation matrices are orthogonal [Tested] (2026 Q21 — rotation matrix $M^{2026}$, use $M^5=I_2$ periodicity)
- **Idempotent / projection matrix** ($A^2=A$): eigenvalues are only 0 or 1 [Tested] (2026 Q52, Q65 — centering matrix $M=I_n-\frac1n\mathbf{1}\mathbf{1}^T$)
- **Positive semi-definite**: all eigenvalues $\ge 0$; $x^TAx\ge0\ \forall x$ [Unseen]
- For $A=I_n+xx^T$ with $\|x\|=1$: eigenvalues are $1$ (multiplicity $n-1$) and $2$ (for eigenvector $x$) — general pattern: rank-1 update shifts exactly one eigenvalue [Tested] (2025 Q28)

### Vector spaces
- Subspace test: contains $\vec0$, closed under $+$ and scalar multiplication [Tested] (2024 Q47)
- Linear independence ⟺ only trivial solution to $\sum c_iv_i=0$ [Unseen]
- Basis = maximal linearly independent spanning set; $\dim$ = # basis vectors [Unseen]
- Gram matrix: $A_{ij}=x_i^Tx_j$ for independent vectors → $A$ is invertible (Gram matrix of independent vectors is always non-singular) [Tested] (2025 Q38)

### Orthogonality & projections
- Orthonormal set: $u_i\cdot u_j=0\ (i\neq j)$, $\|u_i\|=1$ [Tested] (2025 Q25, Q50)
- **Projection matrix** onto column space of orthonormal $U$: $P=UU^T$; properties $P^2=P$ (idempotent), $P^T=P$ (symmetric) [Tested] (2025 Q50, 2024 Q49)
- Sum of $x_1x_1^T+\cdots+x_5x_5^T$ for orthonormal $x_i$'s = projection matrix onto their span [Tested] (2025 Q50)
- **Centering matrix**: $M=I_n-\frac1n\mathbf{1}\mathbf{1}^T$ subtracts the mean from every coordinate — this is literally what "mean-centering data" does before PCA [Tested] (2026 Q52, Q65)

### Quadratic forms — Rayleigh quotient (this is the new 2026-style fusion topic)
- $\max_{\|x\|=1} x^TAx = \lambda_{max}(A)$; $\min_{\|x\|=1} x^TAx=\lambda_{min}(A)$ [Tested] (2026 Q65 — directly tests this on centering matrix $A$)
- This is exactly how PCA's "maximize variance" derivation works — connect LA↔ML here

### SVD
- $A=U\Sigma V^T$; singular values $=\sqrt{\text{eigenvalues of }A^TA}$ [Unseen]
- Rank-1 matrix $uu^T$: single non-zero singular value $=\|u\|^2$ [Tested] (2025 Q61 — sum of singular values question)

### Norms
- $\|x\|_2=\sqrt{x^Tx}$; $\|Ax\|=\|x\|$ for orthogonal $A$ (norm-preserving) [Tested] (2025 Q52)

---

## 3. CALCULUS & OPTIMIZATION

### Limits
- $\lim_{x\to0}\frac{\sin x}{x}=1$; $\lim_{n\to\infty}(1+\frac1n)^n=e$ [Unseen]
- **L'Hôpital's rule**: for $0/0$ or $\infty/\infty$ forms, $\lim\frac{f}{g}=\lim\frac{f'}{g'}$ [Tested] (2024 Q60, 2025 Q32)
- Poisson-limit identity: $\lim_{n\to\infty}\sum_{k=0}^{n} \frac{e^{-n}n^k}{k!} = 0.5$ (CDF of Poisson at its own mean tends to 1/2) [Tested] (2026 Q45 — exact question)

### Derivatives
- Power/product/quotient/chain rule [Unseen]
- $\frac{d}{dx}e^x=e^x$, $\frac{d}{dx}\ln x=1/x$ [Unseen]
- Sigmoid derivative $\sigma'(x)=\sigma(x)(1-\sigma(x))$ [Tested] (2024 Q33 — directly asked)
- Partial derivatives / gradient $\nabla f$ [Unseen] (needed conceptually for SGD questions)

### Critical points & convexity
- Necessary condition: $f'(x^*)=0$ [Tested] (2026 Q27, 2024 Q15)
- Second derivative test: $f''>0\Rightarrow$ local min, $f''<0\Rightarrow$ local max [Tested] (2026 Q27, 2024 Q15, Q50)
- Convex function ⟺ $f''(x)\ge0$ everywhere [Tested] (2025 Q51 — always-true statements about $f''>0$)
- Piecewise function continuity/differentiability: match value AND derivative at breakpoints to solve for unknown constants [Tested] (2024 Q37 — solve $a,b,c$)

### Series
- Geometric series: $\sum_{k=0}^\infty ar^k=\dfrac{a}{1-r}$, $|r|<1$ [Tested] (2026 Q35 double sum, 2024 Q4)
- $e^x=\sum_{n=0}^\infty \frac{x^n}{n!}$ [Unseen] (used in the Poisson-limit identity above)

### Optimization (basic)
- Gradient descent update: $w\leftarrow w-\eta\nabla_wL(w)$ [Tested] (2026 Q29 — SGD on $f_w(x)=wx$)
- Stochastic Gradient Descent = gradient computed on single/mini-batch sample instead of full dataset [Tested] (2026 Q29)
- Lagrange multipliers (constrained opt.): $\nabla f=\lambda\nabla g$ [Unseen] — conceptual link to Rayleigh quotient (LA section) and SVM margin maximization

---

## 4. PROGRAMMING & DSA

### Python semantics (your actual risk zone — not raw algorithms)
- **Mutable default argument trap**: `def f(x, lst=[])` — the default list is created ONCE at function definition, and persists/mutates across calls [Tested] (2026 Q16)
- **Closures**: inner functions retain reference to outer function's variables even after outer returns; each call to the outer function creates a NEW enclosing scope [Tested] (2026 Q50)
- `list.append(x)` adds one element; `list.extend(iterable)` adds each element; `list + list` creates new list [Tested] (2025 Q23)
- Set operations `-`, `|`, `&` mutate via reassignment, not in-place, inside loops — trace carefully [Tested] (2025 Q47)
- Mutable objects (lists/dicts) are passed by object-reference — modifying inside a function affects the caller's object [Tested] (2026 Q58)
- Recursion tracing — Fibonacci-style dual recursion `f(n)=f(n-1)+f(n-2)`, tree/DAG recursion with a memo dict [Tested] (2026 Q39, 2024 Q38, 2025 Q63)

### Sorting — know exact comparison/swap counts, not just Big-O

| Algorithm | Best | Average | Worst | Tested |
|---|---|---|---|---|
| Bubble Sort | $O(n)$ | $O(n^2)$ | $O(n^2)$ | [Tested] 2026 Q49 |
| Insertion Sort | $O(n)$ | $O(n^2)$ | $O(n^2)$ | [Tested] 2026 Q49, 2025 Q29 |
| Selection Sort | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | [Tested] 2024 Q45 |
| Quick Sort | $O(n\log n)$ | $O(n\log n)$ | $O(n^2)$ (bad pivot, e.g. sorted array + first-element pivot) | [Tested] 2026 Q15, 2024 Q30 |
| Merge Sort | $O(n\log n)$ | $O(n\log n)$ | $O(n\log n)$ | [Unseen] |
| Heap Sort | $O(n\log n)$ | $O(n\log n)$ | $O(n\log n)$ | [Unseen] |

- **On an already-sorted or nearly-sorted array**: Insertion sort makes 0 swaps but Selection sort still makes $n{-}1$ comparisons per pass — this exact contrast is frequently tested [Tested] (2026 Q49, 2024 Q45)

### Searching
- Binary search: $O(\log n)$; comparisons formula $F(n)=\lfloor\log_2 n\rfloor+1$ (worst case, exact recurrence often asked) [Tested] (2024 Q40)
- Binary search **requires random access** — works on sorted arrays, NOT linked lists [Tested] (2025 Q27)
- Recurrence: $T(n)=T(n/2)+O(1)$ [Unseen]

### Trees
- Full binary tree: $L=I+1$ (leaves = internal nodes + 1), $N=2L-1=2I+1$ [Tested] (2024 Q52, 2024 Q28)
- Height $H$ vs nodes: $N\le 2^{H+1}-1$ [Unseen]
- Pre-order + In-order (or Post-order + In-order) uniquely reconstructs a binary tree; Pre-order + Post-order alone does NOT (unless every node has 0 or 2 children) [Tested] (2026 Q25, 2024 Q28)

### Hashing
- Load factor $\alpha=n/m$ [Tested] (2024 Q21)
- **Expected probes, unsuccessful search (open addressing, uniform hashing)**: $\dfrac{1}{1-\alpha}$ [Tested] (2024 Q21 — exact formula tested)
- Expected probes, successful search: $\dfrac{1}{\alpha}\ln\dfrac{1}{1-\alpha}$ [Unseen]
- Linear probing: $h(k,i)=(h(k)+i)\bmod m$ [Tested] (2025 Q18)

### Graphs
- Tree: $E=V-1$ [Unseen]
- Complete graph: $E=\binom{V}{2}$ [Unseen]
- BFS gives shortest path (# edges) in **unweighted** graphs [Tested] (2024 Q14, 2025 Q58)
- Topological sort exists iff graph is a DAG; multiple valid orderings usually exist [Tested] (2024 Q51)
- DFS discovery/finish time properties, back-edge = cycle detection [Tested] (2024 Q14)

### Deque / Stack / Queue
- Deque: `insertFirst`, `insertLast`, `removeFirst`, `removeLast` — all $O(1)$ with proper implementation [Tested] (2024 Q32)
- Stack = LIFO, Queue = FIFO [Tested] (2024 Q16 — matching question)

---

## 5. DBMS & DATA WAREHOUSING

### Functional Dependencies — Armstrong's Axioms
- **Reflexivity**: if $Y\subseteq X$ then $X\to Y$
- **Augmentation**: if $X\to Y$ then $XZ\to YZ$
- **Transitivity**: if $X\to Y$ and $Y\to Z$ then $X\to Z$
- Derived: Union ($X\to Y, X\to Z \Rightarrow X\to YZ$), Decomposition ($X\to YZ \Rightarrow X\to Y, X\to Z$), Pseudotransitivity
[Tested] all used implicitly in 2026 Q17, 2025 Q17/Q57, 2024 Q46

### Keys
- **Attribute closure** $X^+$: repeatedly apply FDs to grow the attribute set
- **Candidate key**: minimal $X$ such that $X^+=$ all attributes of the relation [Tested] (2026 Q17 — "only candidate keys" question)
- Prime attribute = part of some candidate key; used in 2NF/3NF definitions [Unseen]

### Normalization
- 1NF: atomic (indivisible) values only
- 2NF: 1NF + no partial dependency of non-prime attribute on part of a candidate key
- 3NF: 2NF + no transitive dependency of non-prime attribute on the key
- BCNF: every determinant of every non-trivial FD is a candidate key (strictest)
- **Lossless-join decomposition**: $R_1\cap R_2 \to R_1$ or $R_1\cap R_2\to R_2$ must hold
- **Dependency-preserving decomposition**: union of FDs on the decomposed relations' closures = closure of original FDs [Tested] (2025 Q16 — "if NOT dependency preserving, which operator runs more" → answer: JOIN)

### B+ Trees
- Order $n$ (max pointers per non-leaf node): max $n-1$ keys per node, min $\lceil n/2\rceil$ pointers (except root) [Tested] (2026 Q32, Q41)
- Leaf nodes linked for range queries; all data pointers at leaf level [Unseen]
- Height $\approx \log_{\lceil n/2\rceil}(\text{records})$ [Unseen]

### OLAP / Data Warehousing
- **Number of data cuboids** $=\prod_{i=1}^{k}(L_i+1)$ where $L_i$ = number of concept-hierarchy levels for dimension $i$ (the "+1" accounts for the "ALL" aggregation level per dimension) [Tested] (2026 Q43, 2026 Q18)
- Roll-up = aggregate to coarser granularity; Drill-down = opposite; Slice/Dice = filter dimensions [Unseen]
- Star schema: 1 fact table + multiple dimension tables; Snowflake schema: normalized dimension tables [Tested] (2025 Q46 — fact table dimension attributes)

### SQL / Relational Algebra
- Selection $\sigma$, Projection $\pi$, Join $\bowtie$, Union $\cup$, Set-difference $-$
- Natural join = equi-join on common attribute names, duplicate columns removed
- Correlated subquery: inner query references outer query's row — evaluated once per outer row [Tested] (2026 Q60, 2025 Q33/Q62, 2024 Q26/Q55)
- `GROUP BY` + `HAVING` (filter groups) vs `WHERE` (filter rows before grouping) [Unseen]

---

## 6. MACHINE LEARNING

### Regression
- **OLS closed-form**: $w=(X^TX)^{-1}X^Ty$ [Tested] (2025 Q34 — least squares fit)
- **Ridge regression closed-form**: $w=(X^TX+\lambda I)^{-1}X^Ty$ — the $\lambda I$ term is why it's always invertible even if $X^TX$ is singular [Tested] (2026 Q37, Q55 — Ridge regression properties, MAE)
- Loss functions: MSE $=\frac1n\sum(y_i-\hat y_i)^2$; MAE $=\frac1n\sum|y_i-\hat y_i|$ [Tested] (2026 Q55)
- Regularization shrinks weights toward 0, reduces variance/overfitting, does NOT set weights exactly to 0 (that's Lasso/$L_1$, not Ridge/$L_2$) [Tested] (2026 Q37)

### Naive Bayes
- $P(y|x)\propto P(y)\prod_i P(x_i|y)$ (conditional independence assumption) [Unseen]
- **Parameter count**, $K$ binary attributes, 2 classes: $2K+1$ (K params/class × 2 classes for $P(x_i{=}1|y)$, +1 for the class prior) [Tested] (2024 Q20 — exact formula tested)
- Prior $\times$ likelihood, pick class with max posterior (MAP rule) [Tested] (2026 Q47 — author classification)

### k-NN / distance-based classifiers
- Euclidean distance $d(x,y)=\sqrt{\sum(x_i-y_i)^2}$ [Tested] (2024 Q19, Q63; 2026 Q36)
- Nearest-centroid classifier: assign to class with nearest mean $\mu_c$; squared distance $\|x-\mu_c\|^2$ [Tested] (2025 Q55)

### Clustering
- **k-means objective**: minimize $\sum_k\sum_{x_i\in C_k}\|x_i-\mu_k\|^2$ [Tested] (2024 Q19)
- **Hierarchical clustering linkages**: Single = $\min$ pairwise distance between clusters; Complete = $\max$; Average = mean of all pairwise distances [Tested] (2025 Q30, 2024 Q42)
- Agglomerative clustering = bottom-up merge of closest clusters [Tested] (2026 Q36)

### Dimensionality Reduction
- **PCA**: compute covariance matrix $\Sigma=\frac1n X^TX$ (mean-centered $X$); principal components = eigenvectors of $\Sigma$, ranked by eigenvalue (= variance explained) [Tested] (2026 Q11, 2025 Q60)
- Reducing from $d$ to $k$ dimensions = keep top-$k$ eigenvectors by eigenvalue [Tested] (2026 Q11)
- Direct link to Linear Algebra section: PCA's derivation IS the Rayleigh-quotient maximization above [Tested]

### Discriminant Analysis
- **Fisher LDA objective**: maximize $\dfrac{w^TS_Bw}{w^TS_Ww}$
- $S_B$ = between-class scatter (spread of class means), $S_W$ = within-class scatter (spread within each class) [Tested] (2026 Q22)

### Evaluation metrics
- Accuracy $=\dfrac{TP+TN}{TP+TN+FP+FN}$
- Precision $=\dfrac{TP}{TP+FP}$, Recall $=\dfrac{TP}{TP+FN}$, F1 $=\dfrac{2PR}{P+R}$ [Unseen] (not directly asked yet but core syllabus — expect it)
- Confusion matrix reasoning [Unseen]
- Class imbalance handling (stratified split, resampling) [Tested] (2026 Q12 — imbalanced 10-class problem)

### AI/ML-Statistics fusion
- Linear classifier: $y=sign(w^Tx+b)$; decision boundary is $w^Tx+b=0$ [Tested] (2025 Q22, Q53; 2024 Q53)
- SGD on a simple linear model $f_w(x)=wx$: gradient update derivation [Tested] (2026 Q29)

---

## 7. ARTIFICIAL INTELLIGENCE

### Uninformed & Informed Search
- BFS/DFS/Uniform-Cost Search = uninformed; A* = informed (uses heuristic) [Tested] (2026 Q13)
- $f(n)=g(n)+h(n)$ for A* — $g$=cost so far, $h$=estimated cost to goal [Unseen]
- **Admissible heuristic**: $h(n)\le h^*(n)$ (never overestimates true cost) [Tested] (2024 Q23, 2025 Q44)
- **Consistent (monotone) heuristic**: $h(n)\le c(n,n')+h(n')$ [Unseen]
- Combining heuristics: $\max(h_1,h_2)$ is ALWAYS admissible if both are; $h_1+h_2$ is **NOT** always admissible; $h_1\times h_2$ or $h_1/h_2$ generally not admissible [Tested] (2024 Q23 — exactly this question)

### Adversarial Search
- **Minimax**: MAX node picks max of children's values, MIN node picks min [Tested] (2026 Q30, 2025 Q43)
- **Alpha-beta pruning**: prune a branch when $\alpha\ge\beta$; final minimax value is unchanged by pruning [Tested] (2025 Q43)

### Logic
- **Tautology**: formula true under every truth assignment [Tested] (2024 Q29)
- De Morgan's: $\neg(A\land B)\equiv\neg A\lor\neg B$; $\neg(A\lor B)\equiv\neg A\land\neg B$ [Unseen]
- Implication equivalence: $A\Rightarrow B \equiv \neg A\lor B$ [Unseen]
- **FOL quantifier negation**: $\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)$; $\neg\exists x\,P(x)\equiv\forall x\,\neg P(x)$ [Tested] (2026 Q14, Q48)
- Entailment: $X\models Y$ iff $X\Rightarrow Y$ is a tautology, iff $X\land\neg Y$ is unsatisfiable [Tested] (2026 Q24)

### Bayesian Networks
- **Joint factorization**: $P(X_1,\dots,X_n)=\prod_i P(X_i\mid Parents(X_i))$ [Tested] (2024 Q24, Q64)
- Conditional independence given parents (d-separation, conceptual) [Unseen]
- CPT-based direct probability computation — plug values into the product above [Tested] (2026 Q64, 2024 Q64)
- Variable elimination = exact inference; Gibbs sampling = approximate inference (don't mix these up — a common trap statement) [Tested] (2025 Q26)

---

## 8. DEEP LEARNING (low weight, ~1 Q/year — but make it a guaranteed easy mark)

- Neuron output: $y=\phi(w^Tx+b)$, $\phi$ = activation function [Tested] (2025 Q42, 2024 Q43)
- **ReLU**: $R(x)=\max(0,x)$ — continuous everywhere, differentiable everywhere EXCEPT $x=0$, monotonically non-decreasing, NOT bounded above [Tested] (2025 Q48 — exact TRUE/FALSE statement set)
- Sigmoid: $\sigma(x)=\dfrac{1}{1+e^{-x}}$, derivative $=\sigma(x)(1-\sigma(x))$ [Tested] (2024 Q33)
- tanh derivative: $1-\tanh^2(x)$ [Unseen]
- **Parameter/neuron counting**: fully connected layer with $m$ inputs, $n$ outputs → $m\times n$ weights $+\,n$ biases [Tested] (2026 Q56)
- Forward pass = sequence of (matrix multiply + activation) — compute layer by layer given explicit weights [Tested] (2025 Q42, 2024 Q43)
- Backpropagation = chain rule applied backward through layers (conceptual understanding suffices at this level) [Unseen]

---

## 9. GENERAL APTITUDE (15 marks fixed — formula-light, speed-heavy)

### Quantitative
- Percentage, profit/loss: $\%\Delta = \frac{\text{new}-\text{old}}{\text{old}}\times100$ [Tested] (2025 Q5 — rectangle L,W % change)
- Ratio & proportion [Unseen]
- $nPr$, $nCr$ (same as Probability section) [Tested] (2026 Q7, 2024 Q3)
- **AP**: $a_n=a+(n-1)d$, $S_n=\frac n2[2a+(n-1)d]$ [Unseen]
- **GP**: $a_n=ar^{n-1}$, $S_n=\frac{a(1-r^n)}{1-r}$ [Unseen]
- Speed-distance-time, work-time [Unseen] (not directly seen in these 3 years but standard GA staple)
- Data interpretation: reading pie charts / tables into %→actual-value conversions [Tested] (2024 Q5 — election pie chart, 2025 Q10 — patient histogram)

### Mensuration & Geometry
- Circle area $\pi r^2$, circumference $2\pi r$
- Regular $n$-gon area $=\frac14 n s^2\cot(\pi/n)$ (side $s$) — relevant to dodecagon-type figure questions [Tested] (2025 Q8 — regular dodecagon)
- Cone volume $=\frac13\pi r^2h$ — relevant to double-cone figure questions [Tested] (2024 Q10)
- Pixel/grid counting on images (pure counting, no formula) [Tested] (2025 Q3)

### Verbal & Logical
- Analogies, sentence completion, tense/preposition usage [Tested] (every year, Q1–Q2 GA)
- Syllogism / logical deduction from statements [Tested] (2026 Q8/Q9, 2025 Q11-style, 2024 Q6)
- Spatial reasoning: paper folding, dice nets, figure tiling/coloring (graph-coloring style: min colors = related to graph chromatic number for adjacency) [Tested] (2026 Q3, 2025 Q9, 2024 Q2/Q9)

---

## How to use this sheet

1. Every [Tested] formula is **confirmed exam-relevant** — you should be able to derive it AND apply it under 90 seconds.
2. Every [Unseen] formula is **syllabus-legitimate but unseen in these 3 papers** — lower priority, but skipping them entirely is how people lose "should have gotten" marks.
3. Notice the recurring **cross-topic fusions**: LA↔ML (PCA/Rayleigh quotient), Stats↔ML (Naive Bayes, Ridge), DSA↔AI (search complexity). Study the connectors, not just isolated formulas.
4. Make a **single physical/digital page per subject** from this sheet and re-derive (don't just re-read) each formula once a week until exam.
