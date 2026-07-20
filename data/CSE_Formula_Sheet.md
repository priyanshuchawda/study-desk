# CSE — Complete Subject-Wise Formula Sheet

*Built by extracting every formula/concept actually used across the 390 questions (2024–2026, two sets per year — CS1 and CS2), then cross-checked line-by-line against the official IIT Guwahati CSE syllabus and filled every remaining gap. "[Tested] Tested" = confirmed appeared in 2024/2025/2026 (with paper+question number). "[Unseen] Not yet tested" = in-syllabus (official syllabus wording), not yet seen in these 6 papers but fair game.*

---

## 1. PROGRAMMING & DATA STRUCTURES + ALGORITHMS (highest combined weight — learn this sheet cold)

### C semantics — your actual risk zone, not raw algorithms
- **Pointer/type mismatches**: assigning a string literal to `int*` vs `char*`, `sizeof` on pointers vs arrays — a `char *str1="Hello` vs `int *str3="Hello"` validity question tested this exactly [Tested] (2026 CS1 Q27)
- **Pass-by-reference via pointers**: `void foo(int *p, int x){*p=x;}` — modifying through a pointer changes the caller's variable [Tested] (2025 CS1 Q34)
- **Pointer arithmetic on arrays**: `ptr = &arr[0]+1` moves by one element's width, not one byte; `(*ptr)++` vs `ptr++` are different operations [Tested] (2025 CS2 Q62, 2026 CS2 Q60)
- **String pointer walking**: `while(*b) b++` counts characters until null terminator (this is literally how `strlen` works) [Tested] (2024 CS2 Q33)
- Recursive tracing with array-pointer slicing: `foo(S+1, size-1)` [Tested] (2025 CS1 Q61)
- **Scope/shadowing**: a variable declared inside a nested block shadows the outer one only within that block [Tested] (2026 CS1 Q34 — `i` declared both as parameter and inside `if`)
- Output-prediction on loops with compound updates (`a = a/12 + 1; a += b`) — trace step by step, don't eyeball [Tested] (2024 CS1 Q18)
- Heap vs stack storage in C runtime: local variables → stack; dynamically/structurally growing data (arrays declared inside functions still go on stack; only heap-allocated data via malloc goes to heap) [Tested] (2026 CS2 Q17)
- Right-to-left parameter evaluation order (implementation-defined but explicitly stated when tested) [Tested] (2024 CS2 Q13)

### Linked Lists / Stacks / Queues
- Singly linked list node-count traversal: `while(head){count++; head=head->next;}` pattern [Tested] (2026 CS1 Q39)
- Stack = LIFO, Queue = FIFO — a stack-and-queue race/simulate-the-order question tested this directly [Tested] (2026 CS2 Q50)
- **Meld operation** across data structures (union-like structure) [Tested] (2025 CS2 Q38)
- Linked list allocation on disk: each block reserves space for a pointer to the next block, reducing usable data per block [Tested] (2025 CS1 Q51)

### Trees, BSTs, Heaps — high yield
- **Binary tree**: max nodes at level $i = 2^i$; max nodes in a tree of height $h = 2^{h+1}-1$ [Unseen]
- **BST property**: in-order traversal gives sorted order; a BST built by successive insertion has expected height $O(\log n)$, worst case $O(n)$ (skewed) [Tested] (2025 CS1 Q26 — TRUE/FALSE about BST path lengths, 2024 CS2 Q39 — BST built by insertion order)
- BST insertion order affecting final shape — insert 10,−4,15,30,20,5,60,19 and reason about resulting tree [Tested] (2025 CS2 Q35)
- **Complete binary tree via insertion order into BST** — special-case reasoning [Tested] (2026 CS1 Q40)
- Preorder traversal → reconstruct position of an element [Tested] (2026 CS1 Q62)
- **Binary min-heap** (array-indexed from 1): parent of $i = \lfloor i/2\rfloor$; children $=2i, 2i+1$ (0-indexed variant: parent $=\lfloor(i-1)/2\rfloor$, children $=2i+1,2i+2$) — used to find index bounds of max element in a min-heap, and index parity questions [Tested] (2024 CS1 Q41 — heapify first 3 elements, 2024 CS1 Q43 — possible index positions of the max in a min-heap, 2026 CS1 Q23 — index constraints in an odd-sized min-heap)
- **Height of a min-heap with $n$ keys** $=\lfloor\log_2 n\rfloor$ [Tested] (2025 CS1 Q35 — height of a 32-key min-heap)
- Build-heap is $O(n)$, not $O(n\log n)$ [Unseen] (implicit in heapify questions above — know why)

### Hashing
- **Open addressing — linear probing**: $h(k)=k \bmod m$, on collision try $(h(k)+i)\bmod m$ [Tested] (2026 CS1 Q24 — full simulation)
- **Double hashing**: $h(k,i) = (h_1(k)+i\cdot h_2(k))\bmod m$ [Tested] (2025 CS1 Q65 — exact formula with $h_1(k)=k\bmod11$, $h_2(k)=1+(k\bmod7)$)
- **Chaining**: collisions form linked lists at each bucket; final bucket occupancy after inserting a key sequence [Tested] (2026 CS2 Q30)
- **Load factor** $\alpha = n/m$ [Unseen] — implicit in all the above, know the definition even if not asked as a bare formula
- Dense vs sparse index; a hash index must be dense (every search key has a pointer) [Tested] (2026 CS2 Q46)

### Sorting & Searching
- **Bubble sort pass mechanics** — pairwise adjacent swaps, one full outer loop = one "bubble" of the largest unsorted element to its place [Tested] (2025 CS1 Q33 — nested-loop bubble sort trace)
- **Merge sort recursion trace** — track how a specific array gets split and merged back [Tested] (2026 CS2 Q32)
- Checking "is array sorted" with a single pass, best/worst case comparisons [Tested] (2024 CS1 Q17)
- Sorting complexities (know cold even though not always asked as a bare table):

| Algorithm | Best | Average | Worst |
|---|---|---|---|
| Bubble / Insertion / Selection | $O(n)$ / $O(n)$ / $O(n^2)$ | $O(n^2)$ | $O(n^2)$ |
| Merge Sort | $O(n\log n)$ | $O(n\log n)$ | $O(n\log n)$ |
| Quick Sort | $O(n\log n)$ | $O(n\log n)$ | $O(n^2)$ |
| Heap Sort | $O(n\log n)$ | $O(n\log n)$ | $O(n\log n)$ |
[Unseen] (bare complexity-table recall not directly asked, but every sorting question above assumes you know these)

### Recurrences & Recursion — solve, don't just recognize
- **Substitution/expansion method**: $T(n)=\sqrt n\,T(\sqrt n)+n \Rightarrow$ substitute $n=2^m$ to linearize [Tested] (2024 CS1 Q42)
- Linear recurrences with constant coefficients: $T(n)=5T(n-1)-6T(n-2)$ → solve via characteristic equation $x^2-5x+6=0\Rightarrow x=2,3$ [Tested] (2024 CS2 Q15)
- **Master-theorem-style recurrence comparison**: $T(n)=2T(n-1)+n2^n$ → compare growth rates term by term [Tested] (2025 CS1 Q20)
- Coupled/simultaneous recurrences: $T_1(n)=4T_1(n/2)+T_2(n)$, $T_2(n)=5T_2(n/4)+\Theta(\log^2 n)$ — substitute one into the other [Tested] (2026 CS1 Q17)
- **Matching a recurrence to a target complexity** $\Theta(n)$ — identify which of several recurrence forms solves to linear time [Tested] (2026 CS2 Q25)
- Recursive function tracing with halving: `bar(n) = 1 + bar(n/2)` → $O(\log n)$ calls [Tested] (2026 CS1 Q61)
- **DP table recurrence** — optimal substructure over subproblems $T[i][j]$ [Tested] (2026 CS2 Q39)

### Graph Algorithms
- **BFS/DFS properties on undirected graphs**: a DFS tree edge classification, BFS gives shortest path in unweighted graphs [Tested] (2025 CS2 Q29 — TRUE/FALSE on BFS/DFS trees, 2025 CS2 Q59 — algorithm using BFS twice, 2024 CS1 Q45 — DFS tree that's also a BFS tree)
- **DFS discovery/finish times** $d[v], f[v]$ — pseudocode-level understanding [Tested] (2026 CS1 Q50)
- Connected components via DFS forest: edges in forest = $n$ − (number of components) [Tested] (2024 CS1 Q60)
- **MST (Minimum Spanning Tree)**: uniqueness with distinct edge weights, effect of a constant $\alpha$ added to every edge weight (does NOT change which tree is minimum, but changes total weight) [Tested] (2025 CS2 Q37 — constant added to all weights, 2026 CS1 Q49 — MST properties with unique weights, 2025 CS1 Q18 — MST shortest-path relationship, 2025 CS1 Q64 — edge inclusion in every MST, 2024 CS2 Q51 — spanning tree parity of weight, 2024 CS2 Q59 — count of distinct minimum-weight spanning trees)
- **Number of spanning trees in $K_n$ (Cayley's formula)** $=n^{n-2}$ — directly usable for "spanning trees in complete graph of 4 vertices" [Tested] (2024 CS1 Q34)
- Shortest-path algorithm complexity on a **DAG** (topological-sort-based, $O(V+E)$, beats Dijkstra) [Tested] (2026 CS2 Q37)
- Vertex cover: size of the smallest vertex cover, relation to matching (König's theorem territory for bipartite graphs) [Tested] (2026 CS1 Q47)
- 2-colorability $\Leftrightarrow$ bipartite $\Leftrightarrow$ no odd cycle [Tested] (2026 CS1 Q55)
- Number of matchings in a path graph — relates to Fibonacci-like counting [Tested] (2026 CS1 Q57)
- Chromatic number direct computation on a small graph [Tested] (2024 CS1 Q51 — general bound reasoning, 2024 CS2 Q60 — compute for a given graph)

### Asymptotic notation
- Ordering growth rates: $n^{1/3}, \log n, \log(n!), 2^{\log n}$ — know $\log(n!)=\Theta(n\log n)$ (Stirling) and $2^{\log n}=n$ [Tested] (2026 CS2 Q24 — exactly this ranking)
- $\Theta$ vs a recurrence's actual solved growth — always tested via a recurrence, never as a bare definition (see Recurrences above)

**Genuine gap in P&DS/Algorithms**: no Greedy-vs-DP-vs-Divide&Conquer "identify the paradigm" question and no explicit NP-completeness/reduction question appeared directly in these 6 papers, despite both being named in the syllabus — don't skip them. [Unseen]

---

## 2. ENGINEERING MATHEMATICS

### Discrete Math — Sets, Functions, Relations, Posets/Lattices
- $|A\cup B|=|A|+|B|-|A\cap B|$ [Unseen] (used implicitly, not asked as a bare identity)
- Injective/surjective composition rules: if $f\circ g$ is onto and $f$ is onto, is $g$ necessarily onto? — composition-of-functions TRUE/FALSE [Tested] (2025 CS1 Q17)
- **Binary relation properties** (reflexive/symmetric/transitive/antisymmetric) — test directly on a defined relation like "$(x,y)\in R$ if $xy$ is a perfect square" [Tested] (2026 CS2 Q26)
- **Poset/Lattice via pointwise function ordering**: $f\preceq g \Leftrightarrow \forall x, f(x)\le g(x)$ on functions $\{1,\dots,n\}\to\{0,1\}$ — this IS a Boolean lattice; question tests join/meet-style reasoning [Tested] (2025 CS2 Q42)
- Group-like structures: $Z_n$ under addition mod $n$; self-inverse element counting in $Z_2\times Z_3\times Z_4$ [Tested] (2024 CS2 Q63); function composition as a binary operation, checking group axioms (associativity, identity, inverses) [Tested] (2025 CS1 Q49)

### Propositional & First-Order Logic
- Implication rewriting: "$p$ cannot happen when $q$" → formalize and simplify [Tested] (2024 CS2 Q12)
- Custom binary operators defined on positive integers, checking associativity/commutativity/distributivity [Tested] (2024 CS1 Q52)
- **FOL quantifier structure**: induction-style statement $P(0)\wedge\forall x[P(x)\Rightarrow P(x+1)] \Rightarrow \forall x\, P(x)$ — recognizing this as valid induction reasoning [Tested] (2025 CS2 Q15)
- De Morgan's / quantifier negation [Unseen] — not directly tested as a bare rule in these 3 years, but underlies the FOL question above

### Combinatorics
- $nPr=\dfrac{n!}{(n-r)!}$, $nCr=\dbinom{n}{r}$ [Unseen] (used implicitly in probability/GA, not asked as a bare formula)
- Counting permutations with an ordering constraint (event "1 occurs before 2") [Tested] (2024 CS1 Q14)
- **Recurrence-based counting** — see Recurrence Relations under Section 1, these are Engineering-Math-syllabus items tested as CS-flavored recurrences
- Pigeonhole principle [Unseen] — not directly tested; still fair game, especially in GA-adjacent logic questions

### Graph Theory (discrete-math side — heavily fused with Algorithms in this paper)
- Adjacency matrix self-inverse property ($A=A^{-1}$) → structural constraint on the graph (must be a disjoint union of edges — a perfect matching graph) [Tested] (2024 CS2 Q17)
- All spanning-tree/MST/chromatic-number/vertex-cover/matching questions listed under Section 1 Graph Algorithms are simultaneously Discrete-Math-syllabus items — **this is the single most-tested Engineering-Math subtopic in the whole paper**
- Handshaking lemma ($\sum \deg(v)=2|E|$) [Unseen] — not directly tested as a bare identity but implicit in edge-counting reasoning

### Linear Algebra — high yield, appears almost every paper
- $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$ [Unseen] (larger matrices tested, not the bare 2×2 formula)
- **Eigenvalues**: $Av=\lambda v\Rightarrow \det(A-\lambda I)=0$; product of all eigenvalues $=\det(A)$ [Tested] (2024 CS1 Q12 — product of eigenvalues of a given matrix)
- **Maximum multiplicity of an eigenvalue** for an $n\times n$ real matrix [Tested] (2026 CS1 Q13)
- **Eigenvalues of $A^k$ are $\lambda^k$** — directly tested via $A^{13}$ for a $2\times2$ matrix [Tested] (2025 CS1 Q41)
- Eigenvalue algebra from a matrix-power relation ($L^2=L^{-1}$, so eigenvalues satisfy $\lambda^2=\lambda^{-1}\Rightarrow\lambda^3=1$ — cube roots of unity) — used to compute $\det(M-N)$ [Tested] (2025 CS2 Q14)
- **$\det(kA)=k^n\det(A)$** for an $n\times n$ matrix — directly tested [Tested] (2026 CS2 Q62)
- $\det(AB)=\det(A)\det(B)$; row-swap negates determinant; invertibility TRUE/FALSE reasoning on a derived matrix $B$ [Tested] (2024 CS2 Q47)
- **Rank / null space**: a specific unit vector forced into the null space of $M$ constrains $M$'s rank and structure [Tested] (2026 CS1 Q20)
- System of linear equations $Ax=0$ with $m>n$ (more unknowns than equations): guaranteed $\ge m-n$ linearly independent solutions [Tested] (2024 CS1 Q49)
- **LU decomposition**: $P=LU$ with $L$ lower-triangular (unit diagonal) and $U$ upper-triangular — solving for unknown entries given the decomposition [Tested] (2025 CS2 Q44)
- Symmetric matrix properties, tied to a system-of-equations question [Tested] (2025 CS2 Q44 context)

### Calculus
- **Piecewise continuity/differentiability**: match value AND derivative at the breakpoint to solve for unknown constants — $f(x)=ax+b$ for $x<1$, cubic for $x\ge1$, solve for $b$ given differentiability [Tested] (2025 CS1 Q31)
- Continuity at a point defined by a limit-based piecewise function, solve for unknown constants $c_1+c_2$ [Tested] (2026 CS1 Q32)
- **Critical points / local max-min via sign analysis** on a piecewise absolute-value function [Tested] (2026 CS1 Q46)
- Functional equation with symmetry $f(x)=1-f(2-x)$ used to evaluate a definite integral without computing $f$ explicitly (symmetry trick) [Tested] (2024 CS2 Q16)
- **Definite integrals**: $\int_1^x t\ln t\,dt=4$, solve for $x$ [Tested] (2025 CS2 Q12); parametrized integral $I(a)=\int_{-1}^1(3x^2-ax+1)\,dx$, reasoning about independence from $a$ (odd-function-integrates-to-zero trick) [Tested] (2026 CS2 Q27)
- Mean Value Theorem [Unseen] — not directly tested as a bare theorem statement in these 3 years, but the continuity/differentiability questions above are adjacent territory

### Probability & Statistics
- $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, mutual exclusivity vs independence — TRUE/FALSE reasoning given $P(A){=}0.3,P(B){=}0.5,P(A\cap B){=}0.1$ [Tested] (2024 CS1 Q27)
- **Conditional probability**: bag of red/blue balls, drawn without replacement, given first is red [Tested] (2024 CS1 Q63)
- All-distinct-outcomes probability (6 dice, all six faces distinct) [Tested] (2024 CS2 Q18)
- **Bayes'-theorem-flavored setup**: fake-coin-among-regular-coins, pick a coin and toss, back-compute probabilities [Tested] (2025 CS1 Q32)
- Binomial-style bit-flip probability over a message [Tested] (2025 CS1 Q56)
- **Continuous density function**: $P(x)=Cx^2$ on $[1,4]$ — solve for normalizing constant $C$ via $\int P(x)dx=1$, then compute $P(2\le x\le3)$ [Tested] (2025 CS1 Q58)
- Standard normal / Gaussian PDF TRUE/FALSE reasoning (symmetry, mean, spread) [Tested] (2026 CS2 Q14)
- Independent coin-toss event probability (6 tosses, specific positions) [Tested] (2026 CS2 Q63)
- Expectation-linearity-adjacent question on random variables $x,y\in[0,1]$, $z=xy$, relating mean values [Tested] (2024 CS2 Q44)
- Discrete random variable with a **given non-uniform PMF over $\{1,\dots,8\}$** — compute expectation directly from definition [Tested] (2026 CS1 Q58)
- Random-point-on-interval expected-length problem (geometric probability) [Tested] (2025 CS2 Q65)

**Genuine gap in Engineering Math**: Bayes' theorem is never explicitly invoked by name (only via disguised setups like the fake-coin question), and the bare formulas for permutations/combinations, pigeonhole principle, and Mean Value Theorem are never tested as standalone identities. Know them anyway — they're one clean question away from appearing. [Unseen]

---

## 3. COMPUTER ORGANIZATION & ARCHITECTURE (heaviest calculation load in the paper)

### Cache & Memory Hierarchy
- **AMAT-style multi-level cache access time**: L1 hit time + L1 miss rate × (L2 hit time + L2 miss rate × main memory time) — tested via a two-level (L1/L2) cache-and-main-memory diagram, compute average access time in ns [Tested] (2025 CS1 Q53 — two-level hierarchy lookup order, 2025 CS2 Q55 — L1/L2 access times + hit rate, numeric AMAT computation)
- **Cache addressing**: given physical address space, cache capacity, and block size, derive tag/index/offset bit-widths [Tested] (2026 CS1 Q38 — $2^{32}$ address space, $2^{23}$ cache, 128-byte blocks; 2026 CS2 Q52 — 4KB direct-mapped cache, 16-byte blocks, 16MB memory; 2026 CS2 Q56 — direct-mapped cache block-number computation for a given physical word address)
- **Direct-mapped cache**: tag bits + index bits + block-offset bits partition of the address; given tag=4 bits, index=12 bits, block=1 byte, derive full address width [Tested] (2025 CS2 Q39)
- Cache + TLB (address translation) combined pipeline reasoning — physical vs virtual addressing to cache [Tested] (2026 CS1 Q54)
- ISA-level vs implementation-level distinction: cache size and clock frequency are NOT part of the Instruction Set Architecture [Tested] (2025 CS2 Q28)

### Execution Time / CPI / Instruction-level performance
- **Execution time = Instruction count × CPI × Clock cycle time**; effective CPI with memory stalls: $CPI_{eff}=CPI_{ideal}+(\text{miss rate}\times\text{miss penalty}\times\text{fraction of memory-referencing instructions})$ [Tested] (2024 CS1 Q56 — 25% load/store instructions, ideal CPI=2, 2% miss rate, compute effective CPI)
- Multi-instruction-type CPI weighted average: total time = $\sum(\text{count}_i\times CPI_i)\times\text{clock period}$ [Tested] (2025 CS2 Q61 — four instruction types with different durations)

### Pipelining
- **Pipeline speedup (non-pipelined vs pipelined redesign)**: compare $\text{cycles}\times\text{cycle time}$ before vs after — a "2 GHz, 6-cycle non-pipelined → redesigned pipelined" throughput-improvement calculation appeared twice [Tested] (2024 CS2 Q58, 2026 CS2 Q57 — 1.6 GHz, 5-cycle non-pipelined redesign)
- **Time to process $N$ instructions through a $k$-stage pipeline** (no stalls) $= (k + N - 1)\times\text{cycle time}$ [Tested] (2025 CS2 Q56 — 1000 instructions, no hazards)
- **Data hazards**: RAW (Read-After-Write) is the only *true* dependency causing a data hazard; WAR/WAW are name/anti-dependencies (avoidable by renaming) — "which dependency causes a data hazard" question [Tested] (2026 CS1 Q16)
- EX-stage timing variation between LOAD (memory read) and ALU instructions — structural/timing hazard reasoning [Tested] (2026 CS1 Q60)
- 5-stage pipeline (IF/ID/EX/MEM/WB) — general stage-based reasoning [Tested] (2024 CS1 Q30)

### Instruction Set / Addressing / Encoding
- **Fixed instruction-width encoding budget**: $n$-bit instruction, $r$ registers needing $\lceil\log_2 r\rceil$ bits each, remaining bits for opcode → max distinct instructions $=2^{\text{opcode bits}}$ [Tested] (2024 CS2 Q57 — 16 registers/32-bit format; 2024 CS2 Q61 — 150 distinct instructions, byte-addressable; 2025 CS1 Q37 — 64 registers, 50 instruction types, max bits for immediate operand; 2026 CS2 Q44 — variable-sized opcode with 16 registers, 2-byte format)
- **Addressing modes**: immediate, direct, register, indirect, indexed — match to high-level-language constructs (array element, pointer dereference, literal constant) [Tested] (2026 CS1 Q14)
- Load-store architecture operand-format reasoning [Tested] (2026 CS1 Q15)

### Disk / Secondary Storage
- **Disk access time = Seek time + Rotational latency + Transfer time**
- **Rotational latency (average) $=\dfrac{60}{RPM}\times\dfrac{1}{2}\times1000$ ms** (half a revolution on average) — directly tested via "15000 rpm, 1 ms track-to-track seek" scenario [Tested] (2026 CS1 Q59); also via "6000 RPM, 5 ms avg seek, 500 sectors/track" full file-read-time computation [Tested] (2024 CS2 Q53)
- Disk geometry: cylinders = (disk capacity)/(surfaces × sectors/track × bytes/sector) [Tested] (2024 CS1 Q54 — 512GB disk, 32 surfaces, 4096 sectors/track)

### I/O — Interrupts & DMA
- **Cycle-stealing DMA**: one word transferred per stolen bus cycle, CPU pauses briefly each time (vs burst/block mode which holds the bus for the whole transfer) — TRUE/FALSE on cycle-stealing mechanics [Tested] (2024 CS1 Q15); DMA transfer-time computation given controller transfer rate [Tested] (2024 CS2 Q11 GA-adjacent stem)
- **Vectored vs non-vectored interrupts**: vectored is faster to dispatch (device ID embedded in the vector, no polling needed) [Tested] (2026 CS2 Q18)

**Genuine gap in COA**: no direct microprogrammed-vs-hardwired-control question and no explicit branch-prediction-penalty numeric question in these 6 papers, though both are adjacent to "ALU, data-path and control unit" in the syllabus. [Unseen]

---

## 4. OPERATING SYSTEMS

### CPU Scheduling
- **Turnaround time = Completion time − Arrival time**; **Waiting time = Turnaround time − Burst time** — average-turnaround/waiting-time computation across a process set with given arrival+burst times, multiple times across years [Tested] (2024 CS2 Q37 — SJF-style single processor; 2025 CS1 Q38 — two processors M1/M2, four processes; 2025 CS2 Q26 — four processes with staggered arrivals; 2026 CS1 Q64 — two process types Actuators/Controllers with different burst patterns)
- **Preemptive vs non-preemptive identification**: SRTF is preemptive, FCFS is inherently non-preemptive — "which CANNOT be made preemptive" [Tested] (2026 CS2 Q23)
- Multiprogramming trace: a process yields the CPU whenever it issues an I/O operation, goes to I/O queue [Tested] (2025 CS1 Q29)

### Process/Thread synchronization
- **Semaphore-based mutual exclusion**: wait()/signal() (P/V) pairs around a critical section using two semaphores (one init to 1, one init to 0) — trace possible interleavings/outputs [Tested] (2024 CS2 Q46 — s1 init 1, s2 init 0; 2026 CS2 Q51 — three processes with binary semaphores A init 1, B init 0)
- **Race condition reasoning**: two threads updating shared variables with context switches at arbitrary points — enumerate all possible final values [Tested] (2024 CS1 Q40)
- Thread-vs-process properties (own stack, shared address space, own file-descriptor-table TRUE/FALSE) [Tested] (2024 CS1 Q24)
- Process state transition validity: e.g., "Waiting → Running" directly is NOT possible (must go through Ready) [Tested] (2024 CS1 Q25)
- Context-switch triggers: which events always force a context switch (I/O request, time-quantum expiry, interrupt) vs which don't [Tested] (2024 CS2 Q25)
- `fork()`/`wait()` process-tree tracing — how many total processes/output lines are produced [Tested] (2024 CS1 Q57, 2026 CS1 Q63)

### Deadlock
- **Four necessary conditions** (all must hold): mutual exclusion, hold-and-wait, no preemption, circular wait — TRUE/FALSE reasoning including "Banker's algorithm is used to PREVENT (not avoid) deadlocks" as a FALSE-statement trap [Tested] (2026 CS1 Q29)
- **Resource-allocation-graph reasoning**: $k$ instances of resource $R$ shared by 5 processes, each needing max 2 instances — find $k$ such that deadlock is impossible (classic $\sum(\text{max}_i - 1) < k$ style bound) [Tested] (2026 CS1 Q35)
- Deadlock detection via resource-allocation graph with multiple resource types [Tested] (2025 CS2 Q48)

### Memory Management — Paging & Virtual Memory
- **Effective/logical-to-physical address translation**: given logical address width, physical address width, page size → derive page-table-entry count and offset bits [Tested] (2025 CS1 Q14 — 32-bit logical, 20-bit physical, 2048-byte pages)
- **Multi-level page tables**: 32-bit system, 4KB pages, 4-byte PTEs, 2-level page table — derive bits per level [Tested] (2024 CS2 Q64); 2-level hierarchical paging with $2^{32}$-byte address space, 4096-byte pages, derive address-field split [Tested] (2025 CS2 Q58)
- **TLB reach** $=$ (number of TLB entries) × (page size) — given TLB reach = 1MB, back-compute entries or page size [Tested] (2026 CS2 Q54)
- MMU responsibilities under paging (address translation, protection checks — NOT physical allocation itself) [Tested] (2024 CS2 Q24)
- **Page replacement algorithms**: FIFO, LRU, Optimal — full page-reference-string simulation with 3 frames to count faults [Tested] (2025 CS2 Q47 — reference string 1,2,3,4,5,4,1,6,4,5,1,3,2); a *modified* optimal algorithm variant [Tested] (2025 CS1 Q54)

### File Systems
- **Linked file allocation**: each data block reserves space for a "next block" pointer, reducing usable payload per block — compute effective storage [Tested] (2025 CS1 Q51)
- Free-block tracking: bitmap (bit vector) vs linked-list approach trade-offs [Tested] (2026 CS2 Q53)

**Genuine gap in OS**: Banker's algorithm *safety-check simulation* (Available/Max/Allocation/Need matrix walkthrough) is named in the syllabus but not run as a full worked example in these 6 papers — only referenced conceptually. Practice at least one full safety-sequence computation. [Unseen] Readers-writers problem also unseen directly. [Unseen]

---

## 5. DATABASES

### Functional Dependencies & Normalization
- **Armstrong's axioms** (reflexivity, augmentation, transitivity) — implicitly used in every FD-implication question: "$(X,Y)\to(Z,W)$ implies $X\to Z$" style TRUE/FALSE reasoning [Tested] (2024 CS1 Q44, 2026 CS1 Q30)
- **"Useful" functional dependency** definition (non-empty LHS, RHS not subset of LHS, minimal/non-redundant) — direct TRUE/FALSE test of the three conditions [Tested] (2024 CS2 Q56)
- **1NF**: atomic values only — TRUE/FALSE on what 1NF does/doesn't restrict (can have a multi-attribute key, foreign keys are unrelated to 1NF) [Tested] (2024 CS1 Q22)
- **Candidate keys**: attribute closure computation to verify/derive candidate keys; counting the number of **super keys** given exactly two candidate keys $\{A,B\},\{A,C\}$ on relation $R(A,B,C,D)$ [Tested] (2026 CS1 Q65)
- **3NF decomposition guarantees**: it's always possible to get a dependency-preserving AND lossless-join 3NF decomposition (this is a theorem — BCNF doesn't guarantee dependency-preservation, but 3NF does) [Tested] (2026 CS1 Q31)
- Closure of a set of FDs, derived FD sets on decomposed relations [Tested] (2026 CS2 Q42)
- Decomposition + FD preservation check across a specific schema with given FDs [Tested] (2025 CS2 Q46)

### Relational Algebra & SQL
- **Join cardinality**: computing the number of tuples from a θ-join / natural join between two given relation instances [Tested] (2024 CS1 Q35)
- Relational-algebra operator selection to express a given query correctly (project/select/join combination) [Tested] (2024 CS2 Q45)
- **Correlated subqueries**: a subquery referencing the outer query's tuple, evaluated per outer row — SQL query semantics [Tested] (2025 CS1 Q39, 2025 CS1 Q55, 2025 CS2 Q54)
- Tuple relational calculus expression evaluated against relations $R(P,Q)$, $S(X,Y)$ — translate to/from relational algebra [Tested] (2026 CS1 Q43)

### B+ Trees & Indexing
- **B+ tree node occupancy**: at least half-full (⌈n/2⌉) except the root, which is exempt from the minimum-occupancy rule [Tested] (2024 CS1 Q21)
- B+ tree structural navigation given actual key values in nodes along a root-to-leaf path [Tested] (2025 CS2 Q57)
- **Dense vs sparse index**: a hash index must always be dense; whether a B+ tree index must also always be dense (it does NOT — can be sparse on the ordering key) [Tested] (2026 CS2 Q46)
- File-organization I/O efficiency for scan operations: sorted/heap/unclustered-tree/unclustered-hash comparison [Tested] (2024 CS2 Q26)

### Transactions & Concurrency Control
- **ACID — Durability**: once committed, effects persist even after a crash [Tested] (2024 CS2 Q19)
- **Two-Phase Locking (2PL)**: guarantees only serializable schedules; does NOT by itself prevent deadlocks (that's the classic trap) [Tested] (2024 CS2 Q27)
- **Conflict serializability via precedence graph**: build the graph from a given read/write schedule, check for cycles [Tested] (2024 CS1 Q46, 2025 CS1 Q15, 2025 CS2 Q53)
- Lost-update anomaly in concurrent banking transactions (two simultaneous transfers from the same account) [Tested] (2025 CS2 Q27)
- Non-conflicting operations between two transactions on the same data object $A$ (both reads, no write involved) [Tested] (2026 CS2 Q20)

### ER Model
- Weak entity set rules (must have total participation in its identifying relationship with the owner) [Tested] (2024 CS2 Q20)
- Translating an English specification into ER-model correctness checks (cardinality, relationship types) [Tested] (2024 CS1 Q20)

**Genuine gap in DBMS**: BCNF (as distinct from 3NF) is never isolated in a direct "is this BCNF?" question — always folded into 3NF/decomposition reasoning. Multi-valued dependencies (4NF) and lossless-join-decomposition-only (without FD-preservation) checks are unseen. [Unseen]

---

## 6. COMPUTER NETWORKS

### Layering & OSI
- **OSI layer-to-functionality matching**: e.g., Network layer ↔ packet routing — direct matching-list question [Tested] (2025 CS1 Q16)

### Data Link Layer
- **Sliding window protocol**: with window size $W$ frames, frame size 1000 bits, compute link utilization/throughput given bandwidth and propagation delay [Tested] (2026 CS1 Q45)
- Ethernet frame size limits interacting with IPv4 fragmentation (1500-byte MTU forcing datagram fragmentation) [Tested] (2025 CS2 Q23)
- **Propagation delay = distance / propagation speed**; transmission-speed and segment-length based propagation-time computation on an Ethernet segment [Tested] (2024 CS2 Q55)
- Designing a link-layer protocol given bandwidth and a 3000 km link length — propagation-delay-dominated reasoning (bandwidth-delay product) [Tested] (2026 CS2 Q65)
- Multi-hop bandwidth bottleneck: three links in series with different bandwidths (2 Mbps, 500 kbps, 1 Mbps) — end-to-end throughput = min of all links [Tested] (2026 CS2 Q21)

### Network Layer — IP Addressing & Routing
- **CIDR / subnetting**: address block `202.16.0.0/15`, assign a 6000-address sub-block via supernetting — derive prefix length from host-count requirement ($2^{h}\ge$ hosts needed) [Tested] (2026 CS1 Q56); subnet mask `255.255.240.0` → max assignable addresses [Tested] (2026 CS2 Q33)
- **Longest-prefix-match routing table lookup**: given a routing table (prefix → next-hop), determine forwarding interface for a specific destination IP [Tested] (2024 CS1 Q58, 2025 CS1 Q40)
- Aggregating a range of IP addresses into the correct CIDR block (`10.12.2.0`–`10.12.3.255` → `/23`) [Tested] (2024 CS2 Q38)
- **NAT (Network Address Translation)**: which IP-header fields are modified going out through a NAT device (source IP, source port, checksum — NOT destination IP) [Tested] (2024 CS1 Q31)
- IP-header fields modified by any router in transit (TTL, checksum — NOT source IP) [Tested] (2024 CS2 Q32)
- ARP maps IP address → link-layer (MAC) address [Tested] (2025 CS2 Q16)
- IPv4 fragmentation rules: only the source fragments (in modern IPv4 usage as tested), reassembly happens only at the final destination [Tested] (2024 CS2 Q28)
- Protocol-field value in IPv4 header identifying the encapsulated transport protocol [Tested] (2025 CS2 Q18)

### Transport Layer
- **TCP 3-way handshake**: SYN → SYN-ACK → ACK, sequence/acknowledgment number relationships [Tested] (2025 CS1 Q22, 2026 CS1 Q18)
- **TCP congestion control — slow start**: exponential growth of congestion window until slow-start threshold, then linear growth (congestion avoidance) — numeric ssthresh + RTT computation of window size over time [Tested] (2026 CS1 Q44)
- **Congestion window behavior after timeout**: window resets, ssthresh is set to half of the window at loss — window-size-after-timeout computation [Tested] (2024 CS2 Q54)
- **TCP throughput/window-based rate**: given receiver window, MSS, and RTT, compute achievable sending rate [Tested] (2026 CS2 Q58)
- HTTP over a single persistent TCP connection — how multiple objects on a page are fetched [Tested] (2024 CS1 Q16)

### Application Layer
- **HTTP 1.1 persistent connections**: allows multiple requests/responses over one TCP connection without re-establishing it [Tested] (2026 CS1 Q19)
- Which protocols need broadcast messages: DHCP (client has no IP yet, must broadcast to find a server) is the standout [Tested] (2026 CS2 Q22)

### Routing Protocols
- **Distance-vector routing = Bellman-Ford based**; **Link-state routing = Dijkstra based** — direct matching-list question [Tested] (2025 CS2 Q17)

**Genuine gap in CN**: Dijkstra's algorithm and Bellman-Ford are named as the mechanism behind routing protocols but never run as a full worked numeric example (e.g., "compute shortest path tree") in these 6 papers. CRC/checksum computation from scratch and detailed socket-level questions are also unseen. [Unseen]

---

## 7. DIGITAL LOGIC

### Boolean Algebra & Minimization
- **Boolean algebra core properties/laws** (absorption, complement, idempotent) — TRUE/FALSE identification of valid vs invalid laws [Tested] (2024 CS2 Q30, 2026 CS2 Q16)
- **SOP (Sum of Products) via minterms**: $F=\sum m(\dots)$, minimize using K-map to find minimal SOP expression(s) — appeared multiple times, including a literal Karnaugh map given directly [Tested] (2024 CS2 Q50, 2025 CS2 Q43 — K-map given, 2025 CS2 Q50, 2026 CS1 Q48, 2026 CS2 Q40)
- **Boolean expression equivalence checking**: XOR/XNOR identity manipulation, $F(P,Q)=(\bar P+Q)\oplus(\bar P Q)$ simplify and match to equivalent forms [Tested] (2026 CS1 Q21)
- 3-variable "majority function" (output 1 when ≥2 inputs are 1) — recognize and manipulate its Boolean form [Tested] (2025 CS1 Q24)

### Number Representations & Computer Arithmetic
- **2's complement**: range for $n$ bits is $[-2^{n-1}, 2^{n-1}-1]$; multiple valid 2's-complement representations of a negative number check (only one is correct per bit-width — trap questions on this) [Tested] (2024 CS1 Q13, 2025 CS1 Q25)
- **Sign-magnitude arithmetic**: addition/subtraction and overflow-detection rules differ from 2's complement — direct computation with given sign-magnitude operands [Tested] (2026 CS1 Q22)
- **Booth's algorithm** multiplication trace for signed 2's-complement multiplicand and multiplier [Tested] (2025 CS2 Q32)
- **IEEE-754 single precision**: 1 (sign) + 8 (exponent, bias 127) + 23 (mantissa) bits; identify the largest representable floating-point value pattern [Tested] (2024 CS2 Q14); decode a hexadecimal IEEE-754 value to decimal [Tested] (2026 CS2 Q34); compare/order floating point values given in hex across three registers [Tested] (2025 CS2 Q49)

### Combinational & Sequential Circuits
- **D flip-flop sequential circuit state counting**: given feedback logic, determine the number of distinct reachable states [Tested] (2025 CS1 Q60)
- **Ripple counter frequency**: output frequency of the last flip-flop stage $=\dfrac{1}{\text{period}}$; a 4-bit ripple counter's last-stage period directly gives its output frequency [Tested] (2025 CS2 Q34)
- **Saturating up/down counter** — custom next-state table design, not a standard binary counter [Tested] (2026 CS1 Q37)
- Multiplexer-based combinational logic: multiple 2-to-1 MUXes composed to implement a function [Tested] (2024 CS1 Q64); decoder + MUX combination circuits [Tested] (2026 CS2 Q59)
- Logic-stage propagation-delay-based circuit timing analysis [Tested] (2024 CS1 Q28)

**Genuine gap in Digital Logic**: Excitation tables and Gray-code conversion (both standard sequential-circuit-design tools) are unseen directly in these 6 papers, though flip-flop/counter design questions above are adjacent. [Unseen]

---

## 8. THEORY OF COMPUTATION

### Finite Automata & Regular Languages
- **DFA/NFA equivalence and minimization**: an NFA with $n$ states, minimal-DFA state-count constraints (which counts are IMPOSSIBLE for the minimized DFA) [Tested] (2026 CS1 Q26)
- **Regular expression ↔ DFA/NFA conversion**: identify the RE equivalent to a given DFA diagram, or vice versa [Tested] (2024 CS2 Q22, 2024 CS2 Q41 — 5-state NFA with ε-transitions)
- Counting strings up to a given length accepted by a regular expression, or accepted by both of two given REs [Tested] (2024 CS1 Q61)
- **Language-property closure reasoning** on regular languages: e.g. "$L_1,L_2$ regular, $L_3$ not regular — which statements always TRUE" (union/intersection/complement closure logic) [Tested] (2024 CS1 Q23, 2026 CS1 Q51 — intersection and one operand regular ⇒ properties of the other)
- Defining a regular language via a custom "count of symbol occurrences" constraint — decide which constraint forms keep it regular vs push it to context-free [Tested] (2025 CS2 Q52)
- NFA-based state-transition tracking with a modular arithmetic label (product of symbols mod 7) — trace to determine acceptance [Tested] (2025 CS2 Q60)
- Two finite automata comparison: language equality/subset relationship between $D_1,D_2$ [Tested] (2026 CS2 Q47)

### Context-Free Grammars & Languages
- **Chomsky Normal Form derivation-length reasoning**: for a CNF grammar with $k$ variables, bound the derivation length of a string of length $n$ (CNF derivations of a length-$n$ string take exactly $2n-1$ steps) [Tested] (2024 CS1 Q59)
- **Ambiguity checking**: does a given CFG produce more than one leftmost derivation/parse tree for some string — tested across several grammars, including a general "which grammars are ambiguous" MSQ [Tested] (2024 CS2 Q40, 2024 CS2 Q52, 2026 CS2 Q29)
- CFG membership/derivation tracing for a specific target string [Tested] (2025 CS1 Q19, 2026 CS1 Q52)
- **Deciding whether a language defined via string constraints ($a^mb^mc^{m+n}$ vs $a^mb^nc^{m+n}$) is context-free** — apply pumping-lemma-style intuition (though the lemma itself isn't invoked by name) [Tested] (2025 CS1 Q45)
- Deterministic PDA accepts a strict subset of CFLs (not ALL context-free languages) — a "which is accepted by a DPDA" question [Tested] (2025 CS2 Q24)
- **CFG vs regular expression vs recursive-language closure comparisons** via list-matching [Tested] (2025 CS2 Q25, 2025 CS2 Q30 — context-free/recursive closure properties matching)
- Constraints on a 4-symbol language $\{a^ib^jc^kd^\ell\}$ that keep it context-free (linear relations between counts are CF-preserving in specific patterns) [Tested] (2026 CS2 Q48)
- Grammar with unbalanced-parenthesis-like structure $S\to aSbS\,|\,bS\,|\,\epsilon$ — decidability/ambiguity/language-membership reasoning [Tested] (2026 CS1 Q25)

### Turing Machines & Decidability
- **"$M$ decides $L$" formal equivalence**: $M$ halts on all inputs, accepting exactly $L$ — matching this to the correct formal restatement [Tested] (2026 CS2 Q13)
- Undecidability-adjacent grammar-property reasoning (e.g., emptiness/ambiguity of an arbitrary CFG is undecidable in general — tested via the $S\to aSbS|bS|\epsilon$ grammar TRUE/FALSE set) [Tested] (2026 CS1 Q25)

**Genuine gap in TOC**: the **Pumping Lemma is never invoked by name** or used as an explicit proof technique in these 6 papers, despite being an explicit syllabus line item — questions test the *outcome* (is this language regular/CF?) via structural reasoning instead. Learn to state and apply it formally; it's a "should have gotten" mark. Also unseen: an explicit **Rice's theorem** or general-undecidability-proof question, and formal **Myhill-Nerode** based DFA-minimality proofs. [Unseen]

---

## 9. COMPILER DESIGN (smallest syllabus — fastest to finish)

### Lexical Analysis & Symbol Tables
- **Symbol table responsibilities**: tracks variable scope, type info — FALSE-statement identification about what it does/doesn't do [Tested] (2025 CS1 Q12)
- **Token-definition-based lexer construction**: given regex-style rules for `letter`, `digit`, `id`, `number`, `ws`, trace how an input string is tokenized [Tested] (2026 CS2 Q35)
- Lexical-analyzer-to-output matching (Lexical Analyzer → Token, Syntax Analyzer → Parse Tree, etc.) [Tested] (2024 CS2 Q21)

### Parsing
- **Bottom-up vs top-down parser classification**: Shift-reduce and LR are bottom-up; Predictive and LL(1) are top-down [Tested] (2024 CS1 Q26)
- **LL(1) parsing properties**: does NOT use backtracking; left-recursive grammars are NEVER LL(1) (must eliminate left recursion first) — TRUE/FALSE set [Tested] (2026 CS1 Q28)
- **FIRST/FOLLOW set computation rules**: $\epsilon$-production handling, propagation across productions — TRUE/FALSE on FIRST/FOLLOW computation rules [Tested] (2025 CS1 Q46)
- **SLR/LALR/CLR parser-power classification**: is a given grammar LL(1)? SLR(1)? LALR(1)? CLR(1)? — direct classification question on a specific grammar [Tested] (2025 CS2 Q40)
- **Canonical LR(0) parsing table/automaton construction** for a given grammar — item sets, goto transitions [Tested] (2026 CS2 Q41)
- **SLR parsing table construction** on an augmented grammar with multiple productions [Tested] (2024 CS2 Q65)
- **Dangling-else ambiguity resolution**: comparing two grammars ($G_1$ ambiguous, $G_2$ using a matched/unmatched-statement rewrite to disambiguate) [Tested] (2025 CS2 Q51)

### Syntax-Directed Translation & Semantic Analysis
- **Attribute grammars / SDD**: synthesized vs inherited attributes, side-effect rules in semantic actions — TRUE/FALSE on what an attribute grammar's semantic rules can/cannot do [Tested] (2024 CS2 Q29)
- Comparing two syntax-directed definitions (SDD1 vs SDD2) for the same type-declaration grammar — semantic-rule-design correctness [Tested] (2026 CS1 Q53)
- **Backpatching** for intermediate code generation, especially Boolean expression short-circuit code and control-flow statements [Tested] (2025 CS2 Q21)

### Code Optimization — Data Flow Analyses
- **Live variable analysis**: identifies the code-optimization technique that relies on it (register allocation) [Tested] (2025 CS1 Q13); compute the set of live variables at the exit of each basic block in a given control-flow graph [Tested] (2026 CS2 Q45)
- **Common subexpression elimination**: identify redundant/common subexpressions across a given control-flow graph [Tested] (2026 CS1 Q42)

**Genuine gap in Compiler Design**: runtime environment / activation-record structure (stack frame layout, static/dynamic links) is named in the syllabus's "Runtime environments" line but not tested directly in these 6 papers. [Unseen]

---

## 10. GENERAL APTITUDE (15 marks, fixed — formula-light, pattern-heavy)

### Quantitative
- **Percentage/ratio word problems**: coin-denomination ratio + total-amount split [Tested] (2024 CS1 Q4); profit/loss on two items sold at the same price, one at +10%, one at −10% (net is always a small loss — classic trap) [Tested] (2024 CS2 Q7)
- **Log-identity manipulation**: $\log(p^2+q^2)=\log p+\log q+2\log3$ type equation-solving [Tested] (2024 CS1 Q5); AM-GM/log-mean identity [Tested] (2024 CS2 Q4)
- **Median/statistics from a raw data sample** (including catching an outlier / typo in the data) [Tested] (2024 CS1 Q3)
- Sequence pattern completion (numeric series, find the missing/next term) [Tested] (2024 CS2 Q5)
- **Set-theory word problem**: "$X$ like neither A nor B" inclusion-exclusion style counting over a large population [Tested] (2024 CS2 Q3)
- Probability with dice (single item, standard) [Tested] (2026 CS1 Q10, 2026 CS2 Q3, 2025 CS1 Q8)
- Data interpretation from **pie charts** (macronutrient %, power-generation-technology shares) — convert % to actual values [Tested] (2024 CS1 Q8, 2024 CS2 Q8)
- Iterative-function-table reading (given an iteration table, infer the update rule) [Tested] (2025 CS2 Q8)
- Functional-equation reasoning $Pe^x=Qe^{-x}$ [Tested] (2025 CS2 Q3); prime-number property TRUE/FALSE across arbitrary primes [Tested] (2025 CS2 Q5)

### Verbal & Logical
- Antonym/vocabulary selection [Tested] (every year, Q1)
- Analogy completion (Bird:Nest :: Bee:?) [Tested] (2025 CS2 Q2)
- **Syllogism / valid-conclusion-from-statement** reasoning ("When it's raining, peacocks dance" → what can necessarily be concluded) [Tested] (2026 CS2 Q5, 2026 CS1 Q5)
- Coded-word / substitution-cipher logic (IMAGE→FHBNJ style) [Tested] (2025 CS2 Q7)
- Family-relationship deduction chains (P is brother of Q, S is daughter of Q, ...) [Tested] (2025 CS1 Q4)

### Spatial & Figure-Based Reasoning
- **Tile/pattern-tiling construction** — which figure CANNOT be built from given tile patterns [Tested] (2026 CS1 Q2, 2026 CS2 Q2, 2026 CS2 Q7)
- **Paper folding** (predict result of sequential folds) [Tested] (2024 CS1 Q7, 2024 CS1 Q9, 2025 CS1 Q9, 2025 CS2 Q4)
- 3D structure inference from front/top 2D views [Tested] (2026 CS1 Q7)
- Symmetry-completion (minimum squares to add for a line of symmetry) [Tested] (2024 CS1 Q10)
- Cube-cutting / solid-geometry visualization (straight cuts to divide into equal pieces) [Tested] (2024 CS2 Q9)
- Grid/graph-based logic puzzles (numbers + crosses in a 4×4 array with row/column rules) [Tested] (2024 CS2 Q10)
- River-segment / network-diagram interpretation [Tested] (2025 CS2 Q10)
- Tournament/elimination counting: $n$ players, knockout tournament needs exactly $n-1$ games — general combinatorial-logic pattern, not a GA-specific formula but recurs every year [Tested] (2026 CS1 Q3)

**Note**: GA is the most "pattern recognition over formula recall" section — the quant identities above (percentages, logs, AM-GM) matter, but the bulk of the marks come from speed on spatial/verbal reasoning, which has no formula sheet substitute. Timed practice is the only lever here.

---

## How to use this sheet

1. Every [Tested] formula is **confirmed exam-relevant** — you should be able to derive it AND apply it under 90 seconds.
2. Every [Unseen] formula is **syllabus-legitimate but unseen in these 6 papers** — lower priority, but skipping them entirely is how people lose "should have gotten" marks. Some of these are genuinely surprising gaps (Pumping Lemma, Bayes' theorem by name, Amdahl's Law, Master Theorem by name) — don't assume "not tested in 3 years" means "won't be tested this year."
3. Notice the recurring **cross-topic fusions unique to CS**: recurrence relations bridge Engineering-Math and Algorithms; graph theory bridges Discrete Math and Algorithms (MST/matching/coloring questions test both simultaneously); C-programming questions frequently double as Data-Structures questions (pointer-based linked-list code); disk/cache numeric questions fuse COA with OS (page tables + TLB + cache all in one scenario in 2026 CS1 Q54).
4. **MSQ-format awareness**: a large fraction of the [Tested] questions above are multi-select (MSQ) "which of the following is/are TRUE" format with no partial credit — this rewards knowing *why* a statement is false (e.g., "2PL prevents deadlocks" is a classic false trap) over rote formula recall.
5. Make a **single physical/digital page per subject** from this sheet and re-derive (don't just re-read) each formula once a week until exam.
6. **Genuine blind spots to prioritize now** — explicitly named in the official syllabus but not directly tested in these 3 papers, so they're the most likely source of a "why didn't I know this" moment: Pumping Lemma (regular AND context-free versions), Bayes' theorem stated formally, Mean Value Theorem, pigeonhole principle, Amdahl's Law, NP-completeness/polynomial-time-reduction reasoning, Banker's algorithm full safety-check simulation, BCNF isolated from 3NF, and runtime-environment/activation-record structure in Compiler Design. Everything else on this sheet has direct PYQ backing.

