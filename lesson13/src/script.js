parseInt("hello", 10);    // NaN
parseInt("123hello", 10); // 123
parseInt("ff", 16);       // 255
parseInt(1000, 2);        // 8
parseInt(1000, 2);        // 8

parseFloat("12.3hello");  // 12.3

(255).toString(16); // ff

Math.random().toString(36).substr(2);
// 1ajs3sz1fotialck8ogbx7ds4i