import book1 from "@/app/assets/books/Stories/book1.jpg";
import book2 from "@/app/assets/books/Stories/book2.jpg";
import book3 from "@/app/assets/books/Stories/book3.jpg";
import book4 from "@/app/assets/books/Stories/german_stories.png";
import book5 from "@/app/assets/books/physics/physics.png";
import book6 from "@/app/assets/books/math/all_of_statistics.png";
import book7 from "@/app/assets/books/math/calculus.png";
import book8 from "@/app/assets/books/math/integral_calculus.png";
import book9 from "@/app/assets/books/math/linear_algebra.png";
import book10 from "@/app/assets/books/math/numerical_analysis.png";
import book11 from "@/app/assets/books/computer science/operating_system_concepts.png";
import book12 from "@/app/assets/books/computer science/Java Network Programming ( PDFDrive ).png";
import book13 from "@/app/assets/books/computer science/machine_learning_step_by_step_guide.png";
import book14 from "@/app/assets/books/computer science/computer_architecture.png";

import book15 from "@/app/assets/books/computer science/introduction to algorithms cover.png";
import book16 from "@/app/assets/books/Stories/karamaza brothers cover.png";
import book17 from "@/app/assets/books/math/linear algebra done right.png";
import book18 from "@/app/assets/books/Stories/Anna Karina Cover.png";

import profileImg1 from "@/app/assets/website/dolphine.png";
import profileImg2 from "@/app/assets/website/horse.jpeg";
import profileImg3 from "@/app/assets/website/horses.png";
import profileImg4 from "@/app/assets/website/mountain.png";
import profileImg5 from "@/app/assets/website/thumbnail (3).jpg";
import profileImg6 from "@/app/assets/website/thumbnail (15).jpg";
import profileImg7 from "@/app/assets/website/thumbnail (16).jpg";
import profileImg8 from "@/app/assets/website/thumbnail (17).jpg";
import profileImg9 from "@/app/assets/website/thumbnail (18).jpg";

export const appLinks = [
  { id: 1, key: "free_books", link: "/free-books" },
  { id: 2, key: "all_books", link: "/all-books" },
  { id: 3, key: "about_us", link: "/about" },
  { id: 4, key: "contact_us", link: "/contact-us" },
  { id: 5, key: "rate_us", link: "/rate-us" },
  { id: 6, key: "get_help", link: "/get-help" },
  { id: 7, key: "write_notes", link: "/rich-text-editor" },
];

export const allBooks = [
  {
    id: "book_1",
    img: book1,
    title: "Who Is There?",
    type: "story",
    age: ">12",
    edition: "first edition",
    author: "Anonymous",
    language: "english",
    rating: 3.8,
    price: 18,
    downloadURL: "/books/who-is-there.pdf",
    description:
      "A mysterious tale of identity and belonging, where a young protagonist discovers hidden messages in an old house that challenge everything they thought they knew about their family. Perfect for readers who love psychological suspense with emotional depth.",
    depthDescription:
      "Set in the fog-drenched coastal town of Blackwater Cove, 'Who Is There?' unfolds through a mosaic of found objects: water-damaged letters sealed in a wall, a child’s diary written in cipher, and a series of Polaroids showing the same room across decades. The protagonist, 16-year-old Elise, begins to suspect her parents are not who they claim to be after uncovering a birth certificate with a different name. As she deciphers clues left by a previous occupant—a woman who vanished in the 1970s—the narrative blurs the line between inherited memory and constructed reality. The house itself becomes a character, its creaking floors and shifting shadows reflecting Elise’s psychological unraveling. Themes of adoption, erasure, and the fragility of familial bonds are explored with lyrical precision. The climax reveals a government witness protection program gone awry, forcing Elise to choose between truth and the only home she’s ever known. Haunting and introspective, this novel lingers like a half-remembered dream, challenging readers to question how much of their own identity is truly their own.",
  },
  {
    id: "book_2",
    img: book2,
    title: "His life will be forever change",
    type: "story",
    age: ">12",
    edition: "first edition",
    author: "John Nash",
    language: "english",
    rating: 2.9,
    price: 22,
    downloadURL: "/books/book2.pdf",
    description:
      "A fictional narrative exploring the inner world of a mathematician grappling with reality and imagination. Though loosely inspired by real-life genius John Nash, this story blends drama, introspection, and the blurred lines between logic and madness.",
    depthDescription:
      "'book2' plunges into the fractured psyche of Dr. Elias Vorne, a once-celebrated number theorist whose groundbreaking work on prime distribution earned him a Fields Medal nomination—before his mind began to fracture. The narrative alternates between clinical session transcripts, encrypted journal entries, and hallucinatory dialogues with 'The Constant,' a sentient mathematical entity that claims to govern the universe’s hidden symmetries. As Elias’s grip on consensus reality weakens, he becomes convinced that solving a particular Diophantine equation will unlock a parallel dimension where his deceased daughter still lives. The prose mirrors his mental state: early chapters are crisp and logical, while later sections spiral into recursive metaphors and typographical chaos. Supporting characters—a skeptical psychiatrist, a loyal graduate student, and a rival mathematician—serve as anchors to the real world, yet even they begin to question whether Elias’s delusions might contain a kernel of transcendent truth. The novel critiques the romanticization of 'mad genius' while honoring the profound loneliness of intellectual obsession. Its ambiguous ending leaves readers wondering: was it madness, revelation, or something in between?",
  },
  {
    id: "book_3",
    img: book3,
    title: "Lost Boy",
    type: "story",
    age: ">12",
    edition: "second edition",
    author: "Anonymous",
    language: "english",
    rating: 4.9,
    price: 16,
    downloadURL: "/books/lost-boy.pdf",
    description:
      "A haunting coming-of-age story about a boy who vanishes during a summer storm and returns years later with no memory of where he’s been. Told through alternating perspectives, it examines trauma, memory, and the meaning of home.",
    depthDescription:
      "In the summer of 1998, 12-year-old Leo vanished during a thunderstorm while chasing his dog into the Whisper Pines forest. Five years later, he reappears at the town’s bus station—barefoot, mute, and wearing clothes that don’t match any known manufacturer. 'Lost Boy' unfolds through three interwoven voices: Leo himself (whose memories return in fragmented, sensory flashes), his older sister Maya (now a forensic psychology student obsessed with his case), and Mr. Finch, the reclusive beekeeper who claims to have sheltered Leo in an off-grid cabin. As Maya digs deeper, she uncovers rumors of a secretive commune that disappeared from the same woods in the 1970s, and strange symbols carved into Leo’s forearm that match ancient Norse runic protection charms. The narrative masterfully explores dissociative amnesia, the unreliability of recovered memory, and the ethical dilemma of forcing someone to remember a past they may have buried for survival. Leo’s gradual reintegration is portrayed with heartbreaking nuance—his terror of thunderstorms, his instinctive knowledge of wild edible plants, his uncanny ability to calm agitated animals. The climax reveals he spent his missing years with a hermit suffering from PTSD, who taught him silence as a form of safety. Ultimately, the novel argues that 'home' is not a place, but the courage to be known—even when the truth is unbearable.",
  },
  {
    id: "book_4",
    img: book4,
    title: "Collection of 25 Modern and Classic Stories",
    type: "story",
    age: ">13",
    edition: "first edition",
    author: "John Nash",
    language: "german",
    rating: 2.6,
    price: 25,
    downloadURL: "/books/collection-of-25-modern-and-classic-stories.pdf",
    description:
      "An anthology featuring timeless tales from Kafka, Mann, and modern German voices, curated to showcase the evolution of narrative style across centuries. Ideal for students and lovers of European literature.",
    depthDescription:
      "This meticulously curated anthology spans over 200 years of German-language storytelling, beginning with Goethe’s psychological depth in 'The Sorrows of Young Werther' and progressing through the existential dread of Kafka’s 'The Metamorphosis' and the moral complexity of Thomas Mann’s 'Mario and the Magician.' It includes lesser-known gems like Ingeborg Bachmann’s feminist parables and Christa Wolf’s postwar introspections, alongside contemporary voices such as Daniel Kehlmann and Jenny Erpenbeck, who tackle migration, digital alienation, and historical reckoning. Each story is prefaced by a scholarly yet accessible introduction that contextualizes its historical moment, literary innovations, and thematic concerns. The collection is organized thematically—'Identity,' 'Power,' 'Memory,' 'Absurdity'—revealing surprising dialogues across centuries: how Kafka’s bureaucratic nightmares echo in modern tales of algorithmic control, or how Mann’s critiques of fascism find new resonance in today’s political climate. Translations are newly commissioned for this volume, prioritizing linguistic rhythm over literal accuracy to preserve the musicality of the original German. Designed for both classroom use and solitary reading, it includes discussion questions and suggested further readings. More than a textbook, it’s a living archive of the German-speaking soul—its anxieties, its ironies, and its unyielding search for meaning in an often-incomprehensible world.",
  },
  {
    id: "book_5",
    img: book5,
    title: "Physics for Game Developers",
    type: "physics",
    age: ">16",
    edition: "first edition",
    author: "David M. Bourg",
    language: "german",
    rating: 2.6,
    price: 45,
    downloadURL: "/books/physics-for-game-developers.pdf",
    description:
      "A practical guide that teaches how to implement real-world physics—like collision detection, rigid body dynamics, and fluid simulation—into video games using code examples and clear mathematical explanations.",
    depthDescription:
      "'Physics for Game Developers' bridges the gap between theoretical physics and real-time game engines by translating complex principles into efficient, stable code. The book begins with Newtonian mechanics—covering force, mass, acceleration, and torque—before advancing to rotational dynamics, where it explains moment of inertia tensors and quaternion-based orientation to avoid gimbal lock. A full chapter is dedicated to collision detection algorithms, from simple bounding spheres to swept AABBs and the Gilbert-Johnson-Keerthi (GJK) algorithm for convex shapes, with performance trade-offs clearly analyzed. Fluid simulation is tackled through smoothed-particle hydrodynamics (SPH), with optimizations for GPU implementation. Crucially, the author emphasizes numerical stability: how to prevent energy drift in integrators, handle time-step inconsistencies, and manage constraint stacking in ragdoll systems. Every concept is accompanied by C++ snippets that can be dropped into engines like Unity or Unreal with minimal adaptation. Case studies include realistic vehicle suspension, destructible environments, and cloth simulation using mass-spring systems. The second half explores advanced topics like inverse kinematics for character animation and aerodynamic lift for flight simulators. Written for developers with basic calculus knowledge, it avoids excessive formalism while preserving mathematical rigor—making it the definitive practical reference for indie and AAA studios alike.",
  },
  {
    id: "book_6",
    img: book6,
    title: "All of Statistics: A Concise Course in Statistical Inference",
    type: "math",
    age: ">14",
    edition: "first edition",
    author: "Larry Wasserman",
    language: "german",
    rating: 2.6,
    price: 65,
    downloadURL:
      "/books/all-of-statistics-a-concise-course-in-statistical-inference.pdf",
    description:
      "A rigorous yet accessible introduction to statistical theory, covering probability, inference, regression, and machine learning foundations. Designed for students with basic calculus and linear algebra knowledge.",
    depthDescription:
      "Larry Wasserman’s 'All of Statistics' achieves the near-impossible: compressing a graduate-level statistics curriculum into a single, coherent volume without sacrificing depth. It begins with measure-theoretic probability—defining sigma-algebras, random variables, and convergence modes (almost sure, in probability, in distribution)—before transitioning to statistical inference via the Neyman-Pearson paradigm. The treatment of hypothesis testing includes uniformly most powerful tests, likelihood ratio tests, and the subtle distinction between statistical and practical significance. Regression is explored from both classical (OLS, GLS) and modern (LASSO, ridge, elastic net) perspectives, with geometric interpretations of regularization. A standout chapter on nonparametric methods covers kernel density estimation, splines, and the bootstrap, while the machine learning section rigorously frames classification as risk minimization under 0-1 loss. The book uniquely integrates Bayesian and frequentist viewpoints, showing how priors can be interpreted as penalized likelihoods. Advanced topics include VC dimension for model complexity, EM algorithm for missing data, and causal inference via potential outcomes. Every theorem is accompanied by intuitive explanations and counterexamples (e.g., why unbiased estimators can be inadmissible). Exercises range from theoretical proofs to R-based simulations that visualize bias-variance tradeoffs. Though concise, it serves as both a first course and a lifelong reference—essential for data scientists who refuse to treat statistics as a black box.",
  },
  {
    id: "book_7",
    img: book7,
    title: "Calculus III",
    type: "math",
    age: ">17",
    edition: "first edition",
    author: "Anonymous",
    language: "german",
    rating: 4.7,
    price: 0,
    downloadURL: "/books/calculus-iii.pdf",
    description:
      "A comprehensive open-access textbook covering multivariable calculus, vector fields, partial derivatives, and multiple integrals. Ideal for university level STEM students seeking a clear, example-driven resource.",
    depthDescription:
      "This open-access 'Calculus III' textbook masterfully extends single-variable concepts into higher dimensions with an emphasis on geometric intuition and physical application. It begins with vectors in ℝ³, dot and cross products, and equations of lines and planes, then progresses to partial derivatives, directional derivatives, and the gradient as the direction of steepest ascent. The chain rule is generalized for multivariable functions, with applications to implicit differentiation and Jacobian matrices. Multiple integrals are explored in Cartesian, cylindrical, and spherical coordinates, with vivid examples like computing the mass of a non-uniform asteroid or the center of gravity of a turbine blade. Vector calculus forms the core: line integrals (work done by a force field), surface integrals (flux through a membrane), and the crowning achievements—Green’s, Stokes’, and Gauss’s theorems—which unify circulation, curl, and divergence into a coherent framework. Each theorem is motivated by physical laws: Gauss’s law in electromagnetism, conservation of mass in fluid dynamics. The text includes 3D visualizations of vector fields, contour plots, and parametric surfaces, alongside step-by-step solutions to complex integrals. Real-world modeling problems draw from electromagnetism, thermodynamics, and robotics. Designed for self-study, it features 'concept checks' after each section and a solutions manual for odd-numbered problems. As a free resource, it democratizes access to rigorous mathematical training for students worldwide.",
  },
  {
    id: "book_8",
    img: book8,
    title: "Integral Calculus",
    type: "math",
    age: ">16",
    edition: "first edition",
    author: "Anonymous",
    language: "german",
    rating: 2.6,
    price: 0,
    downloadURL: "/books/integral-calculus.pdf",
    description:
      "This free educational resource walks learners through techniques of integration, applications in physics and geometry, and improper integrals with step-by-step solutions and practice problems.",
    depthDescription:
      "'Integral Calculus' transforms the often-daunting process of integration into a structured, intuitive journey. It begins with the Fundamental Theorem of Calculus, establishing the deep connection between differentiation and area under a curve, then systematically explores techniques: u-substitution, integration by parts (with the LIATE heuristic), trigonometric integrals, partial fractions, and trigonometric substitution. Each method is illustrated with geometric interpretations—e.g., integration by parts as 'area decomposition'—and common pitfalls are highlighted (like forgetting absolute values in log integrals). Applications span physics (work, fluid pressure, center of mass), geometry (arc length, surface area of revolution), and probability (cumulative distribution functions). Improper integrals are treated with care, distinguishing between Type I (infinite intervals) and Type II (discontinuous integrands), with convergence tests like comparison and limit comparison. The final chapters introduce numerical integration (trapezoidal rule, Simpson’s rule) and special functions (gamma, beta) that arise in advanced contexts. Historical notes trace the development of integration from Archimedes’ method of exhaustion to Leibniz’s infinitesimals, humanizing the mathematics. Every chapter includes 'real-world modeling' sections: calculating the volume of a wine barrel, the force on a dam, or the expected value of a random variable. With over 500 solved examples and 1,200 exercises (with answers to odd problems), this free text rivals commercial textbooks in depth and clarity.",
  },
  {
    id: "book_9",
    img: book9,
    title: "Elementary Linear Algebra, Applications Version",
    type: "math",
    age: ">16",
    edition: "first edition",
    author: "Howard Anton",
    language: "german",
    rating: 2.6,
    price: 78,
    downloadURL: "/books/elementary-linear-algebra-applications-version.pdf",
    description:
      "A classic textbook that balances theory and application, featuring real-world examples from engineering, computer science, and economics. Includes exercises that build both computational and conceptual understanding.",
    depthDescription:
      "Howard Anton’s 'Elementary Linear Algebra' stands as a gold standard for its seamless integration of abstract theory and tangible application. It begins with systems of linear equations and matrix algebra, quickly advancing to vector spaces, subspaces, and the four fundamental subspaces (column, row, null, left-null). Eigenvalues and eigenvectors are introduced through dynamic systems—modeling population growth, Markov chains, and mechanical vibrations—before delving into diagonalization and spectral theory. The applications version shines in its real-world case studies: Google’s PageRank algorithm (eigenvector centrality), computer graphics (affine transformations, homogeneous coordinates), cryptography (Hill ciphers), and economics (Leontief input-output models). A dedicated chapter on least squares approximation connects linear algebra to data fitting and machine learning. The text emphasizes geometric intuition: 2D/3D visualizations of linear transformations, orthogonal projections as 'shadows,' and singular value decomposition (SVD) as a tool for image compression. Theoretical concepts like rank-nullity theorem and Gram-Schmidt orthogonalization are paired with MATLAB and Python exercises that reinforce computational fluency. True/false conceptual questions challenge misconceptions, while 'working with proofs' sections scaffold students into mathematical rigor. Updated editions include modern topics like QR decomposition and applications in network analysis. This book doesn’t just teach linear algebra—it shows why it’s the language of the 21st century.",
  },
  {
    id: "book_10",
    img: book10,
    title: "Numerical Analysis",
    type: "math",
    age: ">16",
    edition: "second edition",
    author: "Walter Gautschi",
    language: "german",
    rating: 4.8,
    price: 55,
    downloadURL: "/books/numerical-analysis.pdf",
    description:
      "A graduate-level introduction to algorithms for solving mathematical problems numerically, including interpolation, quadrature, and differential equations, with emphasis on accuracy and stability.",
    depthDescription:
      "Walter Gautschi’s 'Numerical Analysis' is a masterpiece of mathematical exposition, blending theoretical depth with computational pragmatism. It opens with a rigorous treatment of floating-point arithmetic and error analysis—rounding error, truncation error, condition numbers, and stability—laying the foundation for everything that follows. Polynomial interpolation is explored through Lagrange, Newton, and Hermite forms, with a critical examination of Runge’s phenomenon and the superiority of Chebyshev nodes. Numerical integration (quadrature) covers Newton-Cotes formulas, Gaussian quadrature (with orthogonal polynomials), and adaptive methods that refine intervals based on error estimates. The solution of ordinary differential equations (ODEs) spans Euler’s method, Runge-Kutta families (including embedded pairs for step-size control), and multistep methods (Adams-Bashforth, Adams-Moulton), with stability regions analyzed via Dahlquist’s theory. Partial differential equations (PDEs) are tackled through finite difference methods for elliptic (Poisson), parabolic (heat), and hyperbolic (wave) equations, with von Neumann stability analysis. A standout chapter on orthogonal polynomials (Legendre, Chebyshev, Hermite) reveals their role in approximation theory and Gaussian quadrature. The book emphasizes 'backward error analysis'—interpreting computed solutions as exact solutions to perturbed problems—and includes case studies in astrophysics (orbital mechanics) and engineering (structural vibration). With its precise theorems, insightful remarks, and challenging exercises (many drawn from real research problems), this text is indispensable for computational scientists who demand both accuracy and understanding.",
  },
  {
    id: "book_11",
    img: book11,
    title: "Operating System Concepts",
    type: "math",
    age: ">16",
    edition: "second edition",
    author: "Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
    language: "german",
    rating: 5,
    price: 70,
    downloadURL: "/books/operating-system-concepts.pdf",
    description:
      "Definitive guide explains core OS principles processes, memory management, file systems, and security with clear diagrams and real-world system examples.",
    depthDescription:
      "Widely known as the 'Dinosaur Book,' 'Operating System Concepts' remains the definitive academic text by systematically deconstructing how modern operating systems manage hardware and provide abstractions to applications. It begins with process management—covering process states, scheduling algorithms (FCFS, SJF, Round Robin, Multilevel Queue), and thread models (user-level vs kernel-level)—before diving into inter-process communication (pipes, message queues, shared memory) and synchronization primitives (mutexes, semaphores, monitors) with classic problems like the Dining Philosophers. Memory management is explored from base-and-bound through paging, segmentation, and virtual memory, with detailed analysis of page replacement algorithms (FIFO, LRU, Clock) and TLB optimization. Storage systems span disk scheduling (SSTF, SCAN, C-SCAN), RAID levels, and file system implementation (inodes, directories, free-space management), with comparisons of NTFS, ext4, and APFS. The security chapter has been expanded to cover modern threats: buffer overflows, privilege escalation, sandboxing, encryption (full-disk, file-based), and hardware-based security (TPM, Secure Boot). Virtualization and containerization (Docker, Kubernetes) are integrated throughout, showing how hypervisors and namespaces extend traditional OS concepts. Real-world examples contrast Linux, Windows, and macOS implementations—for instance, how each handles system calls or memory mapping. The 'Practice Exercises' include Linux kernel module programming and xv6 (a Unix-like teaching OS) labs. Updated for multicore architectures, it addresses cache coherence, NUMA, and parallel file systems. This edition doesn’t just describe operating systems—it equips readers to design, debug, and secure them.",
  },
  {
    id: "book_12",
    img: book12,
    title: "Java Network Programming",
    type: "math",
    age: ">16",
    edition: "second edition",
    author: "Elliotte Rusty Harold",
    language: "german",
    rating: 4.7,
    price: 48,
    downloadURL: "/books/java-network-programming.pdf",
    description:
      "A hands-on tutorial for building robust networked applications in Java, covering sockets, HTTP, UDP, and secure communication. Updated for modern Java versions and internet protocols.",
    depthDescription:
      "'Java Network Programming' is the authoritative guide to building scalable, secure, and efficient networked applications in Java. It begins with the fundamentals of TCP/IP and UDP, then dives into Java’s Socket and ServerSocket classes, demonstrating client-server architectures with thread pools for concurrency. A full chapter is dedicated to non-blocking I/O (NIO and NIO.2), explaining selectors, channels, and buffers for high-performance servers that handle thousands of connections. HTTP programming covers both client-side (HttpURLConnection, HttpClient) and server-side (embedded Jetty) implementations, including RESTful API design, cookies, and session management. Security is woven throughout: SSL/TLS setup with keystores and truststores, certificate validation, and secure WebSocket communication. The book addresses real-world challenges like NAT traversal, connection timeouts, packet fragmentation, and firewall compatibility, with debugging techniques using Wireshark and netstat. Advanced topics include multicast UDP for group communication, RMI (Remote Method Invocation) for distributed objects, and protocol design for custom binary formats. Code examples emphasize modern Java features: try-with-resources for automatic socket closure, lambda expressions for event handling, and CompletableFuture for asynchronous operations. The final chapters explore emerging protocols like HTTP/2 and QUIC, and cloud-native considerations (load balancing, service discovery). With its balance of theory, code, and practical wisdom, this book transforms Java developers into confident network engineers.",
  },
  {
    id: "book_13",
    img: book13,
    title: "Machine Learning Step By Step Guide",
    type: "math",
    age: ">16",
    edition: "second edition",
    author: "Andriy Burkov",
    language: "german",
    rating: 5,
    price: 0,
    downloadURL: "/books/machine-learning-step-by-step-guide.pdf",
    description:
      "A free, beginner-friendly introduction to machine learning concepts from linear regression to neural networks using intuitive explanations and Python code. Based on the popular 'Hundred Page Machine Learning Book'.",
    depthDescription:
      "Despite its brevity, Andriy Burkov’s 'Machine Learning Step By Step Guide' distills the essence of modern ML into a remarkably coherent narrative. It begins with the foundational philosophy: the bias-variance tradeoff, the importance of validation sets, and the pitfalls of overfitting. Supervised learning is covered through linear and logistic regression (with gradient descent derivation), decision trees (including entropy and information gain), and ensemble methods like random forests and gradient boosting. Unsupervised learning explores k-means clustering, hierarchical clustering, and PCA for dimensionality reduction. The neural networks chapter demystifies backpropagation with a step-by-step numerical example, then connects it to modern frameworks like TensorFlow. Crucially, the book emphasizes practical wisdom: how to handle imbalanced datasets, when to use L1 vs L2 regularization, and why accuracy is often a poor metric. It introduces kernel methods, SVMs, and Bayesian inference without excessive formalism, always linking math to intuition. The final chapters cover advanced topics—reinforcement learning (Q-learning), sequence modeling (RNNs), and attention mechanisms—with an eye toward current research. Every concept is accompanied by minimal, readable Python code (using NumPy and scikit-learn) that illustrates the core idea without library abstractions. Designed as a 'first book' before tackling dense textbooks like Bishop or Goodfellow, it succeeds by prioritizing understanding over comprehensiveness. As a free resource, it has democratized ML education for millions worldwide.",
  },
  {
    id: "book_14",
    img: book14,
    title: "Computer Architecture",
    type: "math",
    age: ">16",
    edition: "second edition",
    author: "David A. Patterson, John L. Hennessy",
    language: "german",
    rating: 4.9,
    price: 80,
    downloadURL: "/books/computer-architecture.pdf",
    description:
      "The authoritative textbook on modern computer design, covering instruction sets, pipelining, memory hierarchies, and parallelism. Used in top universities worldwide and co-authored by Turing Award winners.",
    depthDescription:
      "Patterson and Hennessy’s 'Computer Architecture' is the seminal text that defined the field’s modern pedagogy through its 'quantitative approach.' This edition confronts the end of Dennard scaling and Moore’s Law by shifting focus from single-core performance to domain-specific architectures (DSAs) like GPUs, TPUs, and FPGAs. It begins with instruction set architecture (ISA) design, comparing RISC-V (open standard), ARM (mobile), and x86 (desktop), then dives into pipelining hazards (structural, data, control) and solutions like forwarding and branch prediction. The memory hierarchy chapter analyzes cache design (direct-mapped, set-associative), replacement policies (LRU, FIFO), and virtual memory translation (TLBs, page tables), with quantitative models for miss rates and AMAT. Parallelism is explored at all levels: instruction-level (superscalar, VLIW), data-level (SIMD), thread-level (multicore, hyperthreading), and cluster-level (message passing). A groundbreaking chapter on warehouse-scale computers (WSCs) reveals how Google and Amazon design data centers for energy efficiency and fault tolerance. The quantum computing appendix, co-authored with experts, explains qubits, entanglement, and Shor’s algorithm without hype. Every concept is grounded in real processors: Apple’s M1, NVIDIA’s A100, and RISC-V cores. Case studies include optimizing matrix multiplication for cache locality and analyzing the energy-performance tradeoffs of mobile SoCs. With its rigorous benchmarks, insightful 'fallacies and pitfalls' sections, and forward-looking vision, this book doesn’t just teach computer architecture—it shapes its future.",
  },
  {
    id: "book_15",
    img: book15,
    title: "Introduction to Algorithms",
    type: "math",
    age: ">16",
    edition: "third edition",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    language: "english",
    rating: 4.9,
    price: 0,
    downloadURL: "/books/introduction-to-algorithms.pdf",
    description:
      "The definitive guide to algorithms, covering sorting, graph theory, dynamic programming, and NP-completeness with rigorous analysis and clear pseudocode.",
    depthDescription:
      "Universally known as 'CLRS,' this cornerstone text provides a comprehensive and mathematically rigorous treatment of algorithms. It begins with foundational concepts—loop invariants, asymptotic notation, and recurrence relations—before diving into sorting (quicksort, heapsort, radix sort) and data structures (hash tables, binary search trees, B-trees). Graph algorithms span breadth-first search, Dijkstra’s shortest path, minimum spanning trees (Kruskal, Prim), and maximum flow (Ford-Fulkerson). Dynamic programming is taught through classic problems like matrix-chain multiplication and longest common subsequence, while greedy algorithms are analyzed via matroid theory. The NP-completeness chapter introduces reducibility, Cook-Levin theorem, and approximation algorithms for intractable problems. Each algorithm is accompanied by correctness proofs and complexity analysis, with real-world applications in bioinformatics, cryptography, and network routing. The third edition adds multithreaded algorithms, van Emde Boas trees, and advanced string matching. With its balance of theory and practice, it remains the gold standard for computer science education worldwide.",
  },
  {
    id: "book_16",
    img: book16,
    title: "The Brothers Karamazov",
    type: "story",
    age: ">16",
    edition: "first edition",
    author: "Fyodor Dostoevsky",
    language: "english",
    rating: 5.0,
    price: 0,
    downloadURL: "/books/the-brothers-karamazov.pdf",
    description:
      "A philosophical novel exploring faith, doubt, free will, and morality through the turbulent lives of three brothers and their enigmatic father.",
    depthDescription:
      "'The Brothers Karamazov' is Dostoevsky’s final and greatest work, a profound meditation on the existence of God, the problem of evil, and the burden of human freedom. Through the contrasting worldviews of the rational Ivan, the sensual Dmitri, and the spiritual Alyosha, the novel stages a cosmic debate: Ivan’s 'Grand Inquisitor' chapter challenges Christ’s gift of free will, while Father Zosima’s teachings offer a vision of active love and humility. The murder of the depraved patriarch Fyodor Pavlovich sets off a chain of psychological and legal drama, but the true conflict is metaphysical. Dostoevsky weaves in courtroom realism, romantic entanglements, and theological discourse to create a tapestry of 19th-century Russian society. The character of Smerdyakov—a servant shaped by resentment and nihilism—embodies the dangers of moral relativism. Published just months before the author’s death, the novel feels like a final testament: a plea for compassion in a world teetering between faith and despair. Its influence extends from existentialist philosophy to modern psychology, and its questions remain urgently relevant.",
  },
  {
    id: "book_17",
    img: book17,
    title: "Linear Algebra Done Right",
    type: "math",
    age: ">16",
    edition: "third edition",
    author: "Sheldon Axler",
    language: "english",
    rating: 4.4,
    price: 0,
    downloadURL: "/books/linear-algebra-done-right.pdf",
    description:
      "A modern approach to linear algebra that emphasizes vector spaces and linear maps over determinants, ideal for theoretical understanding.",
    depthDescription:
      "Sheldon Axler’s revolutionary text reimagines linear algebra by delaying determinants until the final chapter, focusing instead on the intrinsic geometry of vector spaces and linear operators. It begins with complex vector spaces, inner products, and orthogonality, then builds to the spectral theorem for self-adjoint operators and the singular value decomposition. The core insight is that eigenvalues and invariant subspaces reveal the structure of linear maps more clearly than matrix manipulation. Proofs are elegant and conceptual—e.g., the existence of eigenvalues is shown via the fundamental theorem of algebra, not characteristic polynomials. The book includes novel results like the 'Axler trick' for avoiding determinants in volume calculations. Exercises range from straightforward verifications to deep theoretical challenges, many with hints. Designed for math majors, it prepares students for functional analysis and quantum mechanics by emphasizing abstraction over computation. The third edition adds new sections on product spaces, quotient spaces, and dual spaces, along with hundreds of new exercises. For students tired of 'plug-and-chug' linear algebra, this book offers a path to true mathematical maturity.",
  },
  {
    id: "book_18",
    img: book18,
    title: "Anna Karenina",
    type: "story",
    age: ">16",
    edition: "first edition",
    author: "Leo Tolstoy",
    language: "english",
    rating: 4.9,
    price: 0,
    downloadURL: "/books/anna-karenina.pdf",
    description:
      "A tragic love story set against the backdrop of 19th-century Russian aristocracy, exploring themes of passion, society, and moral responsibility.",
    depthDescription:
      "'Anna Karenina' opens with one of literature’s most famous lines: 'All happy families are alike; each unhappy family is unhappy in its own way.' Tolstoy weaves two parallel narratives: Anna’s doomed affair with the dashing Count Vronsky, which leads to social ostracism and psychological disintegration, and Levin’s philosophical quest for meaning through love, faith, and agrarian reform. The novel is a panoramic portrait of Russian society—salons, serfdom, elections, and military campaigns—yet its power lies in intimate psychological detail. Anna’s descent into jealousy and paranoia is rendered with terrifying realism, while Levin’s spiritual awakening mirrors Tolstoy’s own crisis of faith. The narrative technique is revolutionary: free indirect discourse allows readers to inhabit characters’ thoughts without authorial intrusion. Symbolism abounds—the train as fate, the storm as passion, the countryside as moral clarity. Unlike melodrama, Anna’s tragedy stems not from villainy but from the collision of authentic emotion with rigid social codes. A masterpiece of realism, it remains the gold standard for the psychological novel.",
  },
];

export const testimonialData = [
  {
    id: 1,
    name: "Victor Chen",
    text: "This online book platform has revolutionized my reading habits. The interface is clean, the library vast, and downloading books takes seconds. I read more than ever now!",
    img: profileImg1,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    text: "As a student, I rely on this platform for affordable access to textbooks and novels. The search feature is smart, and offline reading works flawlessly.",
    img: profileImg2,
  },
  {
    id: 3,
    name: "Aarav Patel",
    text: "Finding rare and classic titles used to be hard now it’s effortless. This book platform curates beautifully and delivers a seamless reading experience every time.",
    img: profileImg3,
  },
  {
    id: 4,
    name: "Élodie Moreau",
    text: "I love how this platform supports multiple languages and formats. Whether I’m reading poetry or technical guides, the experience is always smooth and enjoyable.",
    img: profileImg4,
  },
  {
    id: 5,
    name: "आरव शर्मा",
    text: "This online book service gave me access to thousands of titles without leaving home. The personalized recommendations are spot on and have introduced me to amazing authors.",
    img: profileImg5,
  },
  {
    id: 6,
    name: "Анастасия Волкова",
    text: "Even with a slow internet connection, this platform loads quickly and syncs my progress across devices. It’s become my go-to for daily reading and relaxation.",
    img: profileImg6,
  },
  {
    id: 7,
    name: "田中陽翔",
    text: "The night mode and customizable fonts make reading comfortable for hours. This book platform truly understands what readers need for an immersive experience.",
    img: profileImg7,
  },
  {
    id: 8,
    name: "Liam O'Sullivan",
    text: "From bestsellers to indie gems, this platform has it all. I especially appreciate the sample chapters—helps me discover new books without commitment.",
    img: profileImg8,
  },
  {
    id: 9,
    name: "Sofia Ricci",
    text: "I’ve tried several e-book services, but this one stands out for its intuitive design, huge collection, and excellent customer support. My reading journey has never been better.",
    img: profileImg9,
  },
];

export const mockUsers: User[] = [
  {
    id: "user_6",
    email: "anastasia@example.com",
    password: "ana987h5",
    name: "Анастасия Волкова",
    profileImage: profileImg6,
    role: "user",
    createdAt: "2024-01-15",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Programming", "Math"],
    },
    currentReadings: ["book_10", "book_8"],
    readingHistory: [
      "book_4",
      "book_7",
      "book_2",
      "book_1",
      "book_5",
      "book_9",
    ],
    savedBooks: [
      "book_1",
      "book_5",
      "book_7",
      "book_8",
      "book_2",
      "book_9",
      "book_6",
      "book_10",
      "book_3",
      "book_4",
    ],
    notes: [
      {
        id: "note_1",
        title: "Multivariable Calculus - Key Concepts",
        content:
          "Gradient vectors point in the direction of maximum increase. The directional derivative D_u f = ∇f · u. For optimization with constraints, use Lagrange multipliers: ∇f = λ∇g. Remember that curl measures rotation in vector fields, while divergence measures source/sink behavior.",
        creationDate: new Date("2024-09-15"),
        aboutBooks: ["book_9", "book_7", "book_2"],
        tags: ["calculus", "vector calculus", "optimization"],
      },
      {
        id: "note_2",
        title: "Integration Techniques Summary",
        content:
          "For rational functions, use partial fraction decomposition. Trigonometric substitution: √(a²-x²) → x = a sinθ, √(a²+x²) → x = a tanθ, √(x²-a²) → x = a secθ. Integration by parts: ∫u dv = uv - ∫v du. LIATE rule for choosing u: Logarithmic, Inverse trig, Algebraic, Trig, Exponential.",
        creationDate: new Date("2024-09-20"),
        aboutBooks: ["book_4", "book_8", "book_3", "book_9", "book_3"],
        tags: ["integration", "calculus", "techniques"],
      },
    ],
  },
  {
    id: "user_002",
    email: "bob@example.com",
    password: "securepass",
    name: "Bob Smith",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-02-10",
    preferences: {
      theme: "dark",
      notifications: false,
      favoriteCategories: ["Science", "Education"],
    },
    currentReadings: ["book_13", "book_6"],
    readingHistory: ["book_4"],
    savedBooks: ["book_15", "book_14"],
    notes: [
      {
        id: "note_002_1",
        title: "Machine Learning Fundamentals",
        content:
          "Bias-variance tradeoff: high bias = underfitting, high variance = overfitting. Cross-validation (k=5 or k=10) helps estimate model performance. Regularization: L1 (Lasso) creates sparse models, L2 (Ridge) prevents overfitting. Always scale features before applying SVM or neural networks.",
        creationDate: new Date("2024-08-12"),
        aboutBooks: ["book_13", "book_6"],
        tags: ["machine learning", "statistics", "model evaluation"],
      },
    ],
  },
  {
    id: "user_003",
    email: "carol@example.com",
    password: "carol123",
    name: "Carol Davis",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-03-05",
    preferences: {
      theme: "system",
      notifications: true,
      favoriteCategories: ["Programming"],
    },
    currentReadings: ["book_11", "book_12"],
    readingHistory: ["book_14"],
    savedBooks: ["book_15", "book_17"],
    notes: [
      {
        id: "note_003_1",
        title: "Process Synchronization in OS",
        content:
          "Critical section problem requires mutual exclusion, progress, and bounded waiting. Semaphores: binary (mutex) vs counting. Monitor = collection of procedures + condition variables. Deadlock conditions: mutual exclusion, hold & wait, no preemption, circular wait. Prevention vs avoidance vs detection.",
        creationDate: new Date("2024-07-28"),
        aboutBooks: ["book_11", "book_14"],
        tags: ["operating systems", "concurrency", "deadlocks"],
      },
    ],
  },
  {
    id: "user_004",
    email: "dave@example.com",
    password: "davepass",
    name: "Dave Wilson",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-03-20",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Physics", "Math"],
    },
    currentReadings: ["book_5", "book_10"],
    readingHistory: ["book_14"],
    savedBooks: ["book_10"],
    notes: [
      {
        id: "note_004_1",
        title: "Rigid Body Dynamics for Games",
        content:
          "Moment of inertia tensor I relates angular momentum L to angular velocity ω: L = Iω. Torque τ = dL/dt = Iα + ω × (Iω). For collision response, use impulse-based methods: J = -(1+e)(v_rel · n) / (1/m1 + 1/m2 + (r1×n)ᵀI1⁻¹(r1×n) + (r2×n)ᵀI2⁻¹(r2×n)).",
        creationDate: new Date("2024-08-05"),
        aboutBooks: ["book_5", "book_10"],
        tags: ["physics", "game development", "rigid body"],
      },
    ],
  },
  {
    id: "user_005",
    email: "eve@example.com",
    password: "eve12345",
    name: "Eve Brown",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-04-01",
    preferences: {
      theme: "dark",
      notifications: false,
      favoriteCategories: ["Education", "Story"],
    },
    currentReadings: ["book_16", "book_18"],
    readingHistory: ["book_4"],
    savedBooks: ["book_1", "book_3"],
    notes: [
      {
        id: "note_005_1",
        title: "The Grand Inquisitor Analysis",
        content:
          "Ivan's parable challenges Christ's gift of free will as too heavy for humanity. The Inquisitor argues people prefer miracle, mystery, and authority over freedom. This reflects Dostoevsky's critique of rationalism and socialism. Alyosha's silent kiss represents faith beyond reason. The chapter is central to understanding the novel's philosophical conflict.",
        creationDate: new Date("2024-09-10"),
        aboutBooks: ["book_16", "book_18"],
        tags: ["literature", "philosophy", "dostoevsky", "existentialism"],
      },
    ],
  },
  {
    id: "user_006",
    email: "frank@example.com",
    password: "frankpass",
    name: "Frank Miller",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-04-10",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Programming", "Computer Architecture"],
    },
    currentReadings: ["book_15", "book_14"],
    readingHistory: ["book_11", "book_12"],
    savedBooks: ["book_17"],
    notes: [
      {
        id: "note_006_1",
        title: "Dynamic Programming Patterns",
        content:
          "Fibonacci: memoize overlapping subproblems. Knapsack: dp[i][w] = max(value[i] + dp[i-1][w-weight[i]], dp[i-1][w]). Longest Common Subsequence: if x[i]==y[j] then dp[i][j] = 1 + dp[i-1][j-1] else max(dp[i-1][j], dp[i][j-1]). Always define state, recurrence, and base cases clearly.",
        creationDate: new Date("2024-08-22"),
        aboutBooks: ["book_15", "book_17"],
        tags: ["algorithms", "dynamic programming", "optimization"],
      },
    ],
  },
  {
    id: "user_007",
    email: "grace@example.com",
    password: "grace123",
    name: "Grace Lee",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-05-01",
    preferences: {
      theme: "system",
      notifications: true,
      favoriteCategories: ["Math", "Science"],
    },
    currentReadings: ["book_6", "book_13"],
    readingHistory: ["book_7", "book_8"],
    savedBooks: ["book_10", "book_4"],
    notes: [
      {
        id: "note_007_1",
        title: "Statistical Inference Key Points",
        content:
          "Central Limit Theorem: sample means ~ N(μ, σ²/n) for large n. Confidence interval for μ: x̄ ± z*σ/√n. Hypothesis testing: H₀ vs H₁, p-value = P(observed | H₀ true). Type I error (α) = false positive, Type II error (β) = false negative. Power = 1-β.",
        creationDate: new Date("2024-09-05"),
        aboutBooks: ["book_6", "book_13"],
        tags: ["statistics", "inference", "hypothesis testing"],
      },
    ],
  },
  {
    id: "user_008",
    email: "henry@example.com",
    password: "henrypass",
    name: "Henry Taylor",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-05-15",
    preferences: {
      theme: "dark",
      notifications: false,
      favoriteCategories: ["Programming"],
    },
    currentReadings: ["book_15"],
    readingHistory: ["book_15"],
    savedBooks: ["book_17"],
    notes: [
      {
        id: "note_008_1",
        title: "Graph Algorithms Implementation",
        content:
          "BFS uses queue, finds shortest path in unweighted graphs. DFS uses stack/recursion, good for topological sorting and cycle detection. Dijkstra: priority queue, O((V+E)log V), doesn't work with negative weights. Bellman-Ford: O(VE), handles negative weights, detects negative cycles.",
        creationDate: new Date("2024-08-18"),
        aboutBooks: ["book_15", "book_17"],
        tags: ["algorithms", "graphs", "data structures"],
      },
    ],
  },
  {
    id: "user_009",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    profileImage: profileImg3,
    role: "admin",
    createdAt: "2023-12-01",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["All"],
    },
    currentReadings: ["book_1", "book_3"],
    readingHistory: ["book_16", "book_18"],
    savedBooks: ["book_1", "book_3", "book_16", "book_18"],
    notes: [
      {
        id: "note_009_1",
        title: "Identity and Memory in Literature",
        content:
          "Both 'Who Is There?' and 'Lost Boy' explore how memory constructs identity. The unreliable narrator technique creates psychological tension. Setting as character: the old house and the forest both represent liminal spaces between reality and perception. Trauma disrupts linear narrative structure.",
        creationDate: new Date("2024-09-25"),
        aboutBooks: ["book_1", "book_3"],
        tags: ["literature", "psychology", "narrative theory"],
      },
    ],
  },
  {
    id: "user_010",
    email: "zoe@example.com",
    password: "zoepass",
    name: "Zoe Clark",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-06-01",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Story", "Education"],
    },
    currentReadings: ["book_18"],
    readingHistory: ["book_4"],
    savedBooks: ["book_15"],
    notes: [
      {
        id: "note_010_1",
        title: "Anna Karenina - Social Commentary",
        content:
          "Tolstoy contrasts Anna's passionate but socially destructive love with Levin's philosophical journey toward meaning. The novel critiques 19th-century Russian aristocracy's hypocrisy. Anna's tragedy stems not from her affair but from society's refusal to accept female autonomy. Levin represents Tolstoy's own spiritual crisis and resolution.",
        creationDate: new Date("2024-09-18"),
        aboutBooks: ["book_18", "book_4"],
        tags: ["literature", "russian", "social criticism", "feminism"],
      },
    ],
  },
];
