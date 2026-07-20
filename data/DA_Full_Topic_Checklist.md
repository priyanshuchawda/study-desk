# DA — Complete Topic & Subtopic Checklist (Full-Marks Coverage)

*Tick each box as you reach "can solve any PYQ-level question on this without hesitation." Built from the official syllabus + everything actually tested across 2024–2026.*

---

## 1. PROBABILITY & STATISTICS

**Counting & Combinatorics**
- [ ] Permutations (with/without repetition)
- [ ] Combinations
- [ ] Permutations with repeated items ($\frac{n!}{n_1!n_2!\cdots}$)
- [ ] Circular permutations
- [ ] Pigeonhole principle

**Probability Foundations**
- [ ] Sample space & events (as sets)
- [ ] Probability axioms
- [ ] Mutually exclusive events
- [ ] Independent events
- [ ] Addition rule, complement rule

**Conditional, Joint & Bayes**
- [ ] Conditional probability
- [ ] Multiplication rule
- [ ] Marginal, joint, conditional probability distinctions
- [ ] Law of total probability
- [ ] Bayes' theorem (medical-test style, box/urn style word problems)

**Discrete Random Variables**
- [ ] PMF definition & properties
- [ ] CDF for discrete RVs
- [ ] Uniform (discrete)
- [ ] Bernoulli distribution
- [ ] Binomial distribution

**Continuous Random Variables**
- [ ] PDF definition & properties ($\int f=1$)
- [ ] CDF for continuous RVs
- [ ] Uniform (continuous)
- [ ] Exponential distribution + memorylessness property
- [ ] Poisson distribution
- [ ] Normal distribution
- [ ] Standard Normal & z-scores
- [ ] t-distribution (degrees of freedom, when to use vs Normal)
- [ ] Chi-squared distribution (sum of squared standard normals)

**Expectation, Variance, Moments**
- [ ] $E[X]$, $Var(X)$ computation (discrete & continuous)
- [ ] Linearity of expectation
- [ ] $E[aX+b]$, $Var(aX+b)$
- [ ] Mean/variance formulas for every standard distribution above (memorized, not derived each time)

**Joint Distributions & Multivariate**
- [ ] Joint PMF/PDF
- [ ] Marginal distributions (integrating/summing out)
- [ ] Conditional distributions $f_{Y|X}$
- [ ] Independence of two random variables
- [ ] Covariance
- [ ] Correlation coefficient
- [ ] Conditional expectation $E[Y|X=x]$
- [ ] Conditional variance $Var(Y|X=x)$
- [ ] Law of total expectation
- [ ] Law of total variance

**Transformation of Random Variables**
- [ ] Linear transformation ($Y=aX+b$)
- [ ] Monotonic transformation via Jacobian ($f_Y(y)=f_X(g^{-1}(y))|dg^{-1}/dy|$)
- [ ] CDF-technique for non-monotonic $g$ (e.g. $Y=X^2$, $Y=\lfloor X\rfloor$)

**Descriptive Statistics**
- [ ] Mean, median, mode
- [ ] Standard deviation & variance (sample vs population, Bessel's correction)
- [ ] Z-score normalization

**Sampling & Estimation**
- [ ] Sample mean & its distribution
- [ ] Updating a running mean when a new point is added
- [ ] Bias of an estimator
- [ ] Central Limit Theorem (statement & implications)

**Hypothesis Testing & Inference** *(explicitly named in syllabus — don't skip)*
- [ ] Null vs alternative hypothesis, p-value logic
- [ ] Confidence intervals (known-σ and unknown-σ cases)
- [ ] z-test
- [ ] t-test (one-sample, two-sample, paired)
- [ ] Chi-squared test (goodness-of-fit, independence)

---

## 2. LINEAR ALGEBRA

**Vectors & Vector Spaces**
- [ ] Vector space axioms
- [ ] Subspaces (and the 3-part test)
- [ ] Span of a set of vectors
- [ ] Linear dependence / independence
- [ ] Basis & dimension

**Matrix Fundamentals**
- [ ] Matrix operations: addition, multiplication, transpose
- [ ] Special matrices: symmetric, diagonal, identity, orthogonal, idempotent, projection
- [ ] Partitioned / block matrices & block multiplication
- [ ] Trace and its properties

**Determinants & Inverses**
- [ ] Determinant computation (2×2, 3×3) and properties ($\det(AB)$, $\det(A^{-1})$, $\det(kA)$)
- [ ] Matrix inverse via adjugate
- [ ] $(AB)^{-1}=B^{-1}A^{-1}$

**Systems of Linear Equations**
- [ ] Gaussian elimination procedure
- [ ] Consistency / uniqueness / infinite-solutions conditions via rank
- [ ] LU decomposition

**Rank & Nullity**
- [ ] Computing rank of a matrix
- [ ] Rank–nullity theorem

**Eigenvalues & Eigenvectors**
- [ ] Characteristic equation $\det(A-\lambda I)=0$
- [ ] Trace = sum of eigenvalues; determinant = product of eigenvalues
- [ ] Eigenvalues of $A^k$, $A^{-1}$, $cA$, and matrix polynomials $p(A)$
- [ ] Eigenvalues of symmetric, orthogonal, idempotent, positive (semi-)definite matrices
- [ ] Diagonalization

**Orthogonality & Projections**
- [ ] Orthogonal / orthonormal vectors
- [ ] Projection matrix ($P=UU^T$, $P^2=P$, $P^T=P$)
- [ ] Centering matrix ($I-\frac1n\mathbf{1}\mathbf{1}^T$) and its role in mean-centering data

**Quadratic Forms & Optimization on Matrices**
- [ ] Positive definite / semi-definite matrices
- [ ] Rayleigh quotient: $\max/\min\ x^TAx$ subject to $\|x\|=1$ → largest/smallest eigenvalue

**Decompositions**
- [ ] LU decomposition
- [ ] Singular Value Decomposition (SVD): $A=U\Sigma V^T$, singular values from $A^TA$

**Norms**
- [ ] $L_1$, $L_2$ ($\|x\|_2=\sqrt{x^Tx}$), $L_\infty$ norms
- [ ] Norm-preserving property of orthogonal matrices

---

## 3. CALCULUS & OPTIMIZATION

**Single-Variable Functions**
- [ ] Domain, range, composition of functions

**Limits & Continuity**
- [ ] Standard limits ($\sin x/x$, $(1+1/n)^n$)
- [ ] L'Hôpital's rule (0/0, ∞/∞ forms)
- [ ] Continuity at a point / on an interval

**Differentiability**
- [ ] Power, product, quotient, chain rule
- [ ] Standard derivatives (exponential, log, trig, sigmoid)
- [ ] Piecewise function continuity & differentiability at breakpoints (solving for unknown constants)

**Taylor Series**
- [ ] Taylor expansion about a general point $a$
- [ ] Maclaurin series (special case $a=0$)

**Maxima, Minima & Convexity**
- [ ] Critical points ($f'(x^*)=0$)
- [ ] Second derivative test
- [ ] Convex vs concave functions ($f''\ge0$)

**Optimization**
- [ ] Unconstrained optimization of a single-variable function
- [ ] Gradient descent update rule
- [ ] Stochastic Gradient Descent (concept)
- [ ] Lagrange multipliers (conceptual, constrained optimization)

**Series & Summations**
- [ ] Geometric series (finite & infinite)
- [ ] $e^x$ series expansion
- [ ] Double/infinite summations

---

## 4. PROGRAMMING, DATA STRUCTURES & ALGORITHMS

**Python Language Mechanics**
- [ ] Core syntax, data types (int, float, str, list, tuple, set, dict)
- [ ] Functions & default arguments — the mutable-default-argument trap
- [ ] Recursion (tracing by hand, including memoized/DP-style pseudocode)
- [ ] Closures & variable scope (global/nonlocal, enclosing scope per call)
- [ ] `list.append()` vs `list.extend()` vs `+`
- [ ] Set operations (`-`, `|`, `&`) and mutation inside loops
- [ ] Mutable objects passed by object-reference (aliasing effects)
- [ ] List/dict comprehensions

**Basic Data Structures**
- [ ] Arrays
- [ ] Singly linked lists
- [ ] Doubly linked lists
- [ ] Stacks (LIFO)
- [ ] Queues (FIFO)
- [ ] Deques (`insertFirst`/`insertLast`/`removeFirst`/`removeLast`)
- [ ] Binary trees — structure & terminology (height, leaves, internal nodes)
- [ ] Tree traversals: pre-order, in-order, post-order
- [ ] Tree reconstruction from two traversals
- [ ] Hash tables — chaining vs open addressing
- [ ] Linear probing & load factor

**Search Algorithms**
- [ ] Linear search
- [ ] Binary search (recurrence, comparison count, sorted-array requirement)

**Sorting Algorithms**
- [ ] Selection sort
- [ ] Bubble sort
- [ ] Insertion sort
- [ ] Merge sort (divide & conquer, recurrence, stability)
- [ ] Quick sort (pivot choice, best/avg/worst case, recurrence)
- [ ] Counting exact comparisons/swaps for a *specific* input array (not just Big-O)

**Graph Theory & Algorithms**
- [ ] Graph representations: adjacency list, adjacency matrix
- [ ] BFS (traversal + shortest path in unweighted graphs)
- [ ] DFS (traversal, discovery/finish times, back-edge = cycle)
- [ ] Topological sort (existence condition, multiple valid orders)
- [ ] Basic shortest-path reasoning

**Algorithm Analysis**
- [ ] Big-O / time & space complexity
- [ ] Recurrence relations
- [ ] Master theorem (basic application)

---

## 5. DATABASE MANAGEMENT & WAREHOUSING

**ER Model**
- [ ] Entities, attributes, relationships
- [ ] Primary key, candidate key, foreign key
- [ ] Cardinality & participation constraints

**Relational Model & Query Languages**
- [ ] Relational algebra: selection, projection, join, union, set-difference
- [ ] Natural join vs theta join
- [ ] Tuple relational calculus
- [ ] SQL: SELECT/WHERE/JOIN
- [ ] SQL: GROUP BY, HAVING, aggregate functions
- [ ] Nested & correlated subqueries

**Integrity Constraints**
- [ ] Entity integrity (PK not null)
- [ ] Referential integrity (FK matches PK or is null)
- [ ] Domain & uniqueness constraints

**Functional Dependencies & Normalization**
- [ ] Armstrong's axioms (reflexivity, augmentation, transitivity)
- [ ] Derived rules: union, decomposition, pseudotransitivity
- [ ] Attribute closure computation
- [ ] Candidate key derivation from FDs
- [ ] 1NF, 2NF, 3NF, BCNF definitions & differences
- [ ] Lossless-join decomposition test
- [ ] Dependency-preserving decomposition test

**File Organization & Indexing**
- [ ] Heap, sequential, hashed file organization (trade-offs)
- [ ] Primary vs secondary index; clustering vs non-clustering
- [ ] B-Tree / B+ Tree structure (order, max/min keys & pointers)
- [ ] B+ Tree search/insert trace

**Data Types & Transformation**
- [ ] Min-max normalization
- [ ] Z-score normalization (data-mining context)
- [ ] Discretization (equal-width, equal-frequency binning)
- [ ] Sampling (random, stratified)
- [ ] Compression (as data reduction)

**Data Warehouse Modelling**
- [ ] Star schema vs snowflake schema
- [ ] Fact tables & dimension tables
- [ ] Concept hierarchies
- [ ] OLAP operations: roll-up, drill-down, slice, dice
- [ ] Counting the number of data cuboids
- [ ] Measure categorization: distributive, algebraic, holistic

---

## 6. MACHINE LEARNING

**Supervised Learning — Regression**
- [ ] Simple linear regression
- [ ] Multiple linear regression
- [ ] OLS closed-form solution
- [ ] Ridge regression (regularization effect, closed form)
- [ ] Loss functions: MSE, MAE

**Supervised Learning — Classification**
- [ ] Logistic regression (sigmoid, decision boundary)
- [ ] k-Nearest Neighbour
- [ ] Naive Bayes classifier (conditional independence assumption, parameter counting)
- [ ] Linear Discriminant Analysis / Fisher's criterion (between/within-class scatter)
- [ ] Support Vector Machine (margin, support vectors, hard vs soft margin, hinge loss)
- [ ] Decision trees (entropy, information gain, Gini index, stopping/pruning)

**Model Evaluation & Validation**
- [ ] Bias-variance trade-off
- [ ] Overfitting vs underfitting
- [ ] Confusion matrix
- [ ] Accuracy, precision, recall, F1-score
- [ ] Leave-One-Out Cross-Validation (LOOCV)
- [ ] k-fold Cross-Validation

**Neural Networks (ML syllabus)**
- [ ] Multi-layer perceptron architecture
- [ ] Feed-forward computation (forward pass by hand)
- [ ] Activation functions: sigmoid, ReLU, tanh (properties & derivatives)
- [ ] Parameter/neuron counting for a given architecture

**Unsupervised Learning — Clustering**
- [ ] k-means (objective function, Lloyd's algorithm concept)
- [ ] k-medoid (PAM) — difference from k-means
- [ ] Hierarchical clustering: agglomerative (bottom-up) vs divisive (top-down)
- [ ] Single-linkage, complete-linkage, average-linkage dissimilarity

**Unsupervised Learning — Dimensionality Reduction**
- [ ] Principal Component Analysis (PCA)
- [ ] Covariance matrix computation (mean-centered data)
- [ ] Eigen-decomposition → principal components
- [ ] Variance explained by top-$k$ components

---

## 7. ARTIFICIAL INTELLIGENCE

**Uninformed Search**
- [ ] Breadth-First Search
- [ ] Depth-First Search
- [ ] Uniform-Cost Search
- [ ] Depth-Limited Search

**Informed Search**
- [ ] A* search algorithm ($f=g+h$)
- [ ] Admissible heuristics
- [ ] Consistent (monotone) heuristics
- [ ] Combining multiple heuristics correctly (max is safe, sum/product generally isn't)

**Adversarial Search**
- [ ] Minimax algorithm (value backup at MAX/MIN nodes)
- [ ] Alpha-beta pruning (when to prune, effect on final value)
- [ ] Game tree evaluation by hand

**Logic**
- [ ] Propositional logic: tautology, satisfiability, logical equivalences (De Morgan's, implication)
- [ ] Predicate / First-order logic: quantifiers ($\forall,\exists$), quantifier negation
- [ ] Translating English statements into FOL
- [ ] Entailment between statements

**Reasoning Under Uncertainty**
- [ ] Bayesian networks: joint distribution factorization from graph structure
- [ ] Conditional independence & d-separation
- [ ] CPT-based probability computation
- [ ] Exact inference via variable elimination
- [ ] Approximate inference via sampling (Gibbs sampling / MCMC concept)

---

## 8. GENERAL APTITUDE

**Verbal Ability**
- [ ] Vocabulary & analogies
- [ ] Sentence completion / fill-in-the-blank
- [ ] Grammar: tense, preposition, subject-verb agreement
- [ ] Reading comprehension
- [ ] Critical reasoning / argument evaluation

**Quantitative Aptitude**
- [ ] Percentages, profit/loss, ratio & proportion
- [ ] Permutations & combinations (shared with Probability section)
- [ ] Basic probability puzzles
- [ ] Number properties (divisibility, digit-sum problems)
- [ ] Arithmetic & Geometric progressions
- [ ] Data interpretation: pie charts, tables, bar/line graphs

**Mensuration & Geometry**
- [ ] Area/perimeter of standard 2D shapes (circle, triangle, polygon)
- [ ] Regular polygon properties (e.g. dodecagon-type figures)
- [ ] Volume of solids (cone, cylinder, sphere)
- [ ] Pixel/grid-based counting problems

**Logical & Analytical Reasoning**
- [ ] Statement-based logical deduction / syllogisms
- [ ] Puzzles (seating arrangement, family tree style)
- [ ] Spatial reasoning: paper folding, dice nets
- [ ] Figure tiling / coloring (graph-coloring intuition)

---

## 9. EXECUTION CHECKLIST (beyond pure content — this is what actually converts knowledge into full marks)

- [ ] Solved every question in the 2024, 2025, and 2026 papers from scratch (not just read the solution)
- [ ] Re-derived every [Tested] formula from the formula sheet without looking, at least once
- [ ] Timed practice on GA section specifically (target: <1 min/question average)
- [ ] Practiced NAT-type questions where there's no option to eliminate from — full computation required
- [ ] Practiced MSQ-type questions by evaluating every option independently (no partial shortcuts)
- [ ] Taken at least 3–4 full-length timed mock tests under real exam conditions (3 hours, no pause)
- [ ] Reviewed every mock test to classify errors as: concept gap / calculation slip / time pressure / misread question
- [ ] Built a personal "mistake log" of the exact same topics where errors repeat, and re-studied those specifically
- [ ] Can do basic mental arithmetic and quick matrix/probability calculations without a calculator crutch (virtual on-screen calculator is slow — don't over-rely on it)
- [ ] Comfortable switching between topics rapidly (the paper interleaves Math/DSA/DBMS/ML/AI question-to-question, not in blocks)

---

**How to use this file**: work top-to-bottom by subject. A box only gets checked when you can solve a PYQ-level question on that exact subtopic cold, under time pressure, without notes — not just when you've "read about it once."
