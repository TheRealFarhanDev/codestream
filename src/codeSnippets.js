export const codeSnippets = {
  Lab1: `import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text(
            'Hello world and Hello Flutter',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}`,

  Lab2: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: CounterApp()));

class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Counter App")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count: \$count', style: const TextStyle(fontSize: 30)),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  icon: const Icon(Icons.remove, size: 30),
                  onPressed: () => setState(() => count--),
                ),
                IconButton(
                  icon: const Icon(Icons.add, size: 30),
                  onPressed: () => setState(() => count++),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`,

  Lab3: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: LoginPage()));

class LoginPage extends StatelessWidget {
  final _email = TextEditingController(), _pass = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(controller: _email, decoration: InputDecoration(hintText: 'Email')),
            TextField(controller: _pass, obscureText: true, decoration: InputDecoration(hintText: 'Password')),
            ElevatedButton(
              child: Text('Login'),
              onPressed: () => ScaffoldMessenger.of(context)
                  .showSnackBar(SnackBar(content: Text('Logging in \${_email.text}'))),
            ),
          ],
        ),
      ),
    );
  }
}`,

  Lab5: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Scaffold(body: _Calc())));

class _Calc extends StatefulWidget {
  @override
  State<_Calc> createState() => __CalcState();
}

class __CalcState extends State<_Calc> {
  String o = '0'; double a = 0; String op = '';

  @override
  Widget build(BuildContext context) => Column(children: [
    Expanded(child: Center(child: Text(o, style: TextStyle(fontSize: 48)))),
    for (var r in ['789÷','456×','123-','C0=+']) Expanded(child:
      Row(children: [for (var b in r.split('')) Expanded(child:
        Padding(
          padding: EdgeInsets.all(4),
          child: ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: b == '=' ? Colors.blue : Colors.grey[200],
              foregroundColor: b == '=' ? Colors.white : Colors.black,
            ),
            child: Text(b, style: TextStyle(fontSize: 24)),
            onPressed: () => setState(() =>
              b == 'C' ? o = '0' : '+-×÷'.contains(b) ? (a = double.parse(o), op = b, o = '0') :
              b == '=' ? o = (op == '+' ? a + double.parse(o) : op == '-' ? a - double.parse(o) :
              op == '×' ? a * double.parse(o) : a / double.parse(o)).toString() :
              o = o == '0' ? b : o + b
            ),
          ),
        )
      )])
    )
  ]);
}`,

  Lab7: `import 'package:flutter/material.dart';
import 'dart:async';

void main() => runApp(MaterialApp(home: StopwatchApp()));

class StopwatchApp extends StatefulWidget {
  @override
  _StopwatchAppState createState() => _StopwatchAppState();
}

class _StopwatchAppState extends State<StopwatchApp> {
  Stopwatch _stopwatch = Stopwatch();
  Timer? _timer;
  String _time = '00:00:00';

  void _updateTime() {
    setState(() {
      _time = _stopwatch.elapsed.toString().substring(0, 7);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text(_time, style: TextStyle(fontSize: 48))),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          FloatingActionButton(
            child: Icon(_stopwatch.isRunning ? Icons.pause : Icons.play_arrow),
            onPressed: () {
              _stopwatch.isRunning ? _stopwatch.stop() : _stopwatch.start();
              _timer?.cancel();
              if (_stopwatch.isRunning) {
                _timer = Timer.periodic(Duration(milliseconds: 30), (_) => _updateTime());
              }
            },
          ),
          SizedBox(width: 20),
          FloatingActionButton(
            child: Icon(Icons.stop),
            onPressed: () {
              _stopwatch.reset();
              _timer?.cancel();
              _updateTime();
            },
          ),
        ],
      ),
    );
  }
}`,

  Lab8: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Screen1()));

class Screen1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Scaffold(
    body: Center(child: TextButton(
      child: Text('Next'),
      onPressed: () => Navigator.push(context, MaterialPageRoute(
        builder: (context) => Scaffold(
          appBar: AppBar(),
          body: Center(child: TextButton(
            child: Text('Back'),
            onPressed: () => Navigator.pop(context),
          )),
        ),
      )),
    )),
  );
}`,

  Lab9: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  debugShowCheckedModeBanner: false,
  home: MyHomePage(),
));

class MyHomePage extends StatelessWidget {
  final List<Map<String, String>> products = [
    {"name": "Nike Shoes", "price": "\\\$120", "image": "https://picsum.photos/200"},
    {"name": "Apple Watch", "price": "\\\$250", "image": "https://picsum.photos/201"},
    {"name": "Headphones", "price": "\\\$80", "image": "https://picsum.photos/220"},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('E-Commerce UI'),
        actions: [IconButton(icon: const Icon(Icons.shopping_cart), onPressed: () {})],
      ),
      body: GridView.count(
        crossAxisCount: 2,
        children: products.map((p) => GestureDetector(
          onTap: () => Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => Scaffold(
              appBar: AppBar(title: Text(p["name"] ?? 'Product')),
              body: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Image.network(p["image"] ?? '', height: 150),
                    Text(p["name"] ?? '', style: const TextStyle(fontSize: 24)),
                    Text(p["price"] ?? '', style: const TextStyle(color: Colors.blue)),
                  ],
                ),
              ),
            )),
          ),
          child: Card(
            child: Column(
              children: [
                Image.network(p["image"] ?? '', height: 100),
                Text(p["name"] ?? ''),
                Text(p["price"] ?? '', style: const TextStyle(color: Colors.blue)),
              ],
            ),
          ),
        )).toList(),
      ),
    );
  }
}`,

  Lab10: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  debugShowCheckedModeBanner: false,
  home: Scaffold(
    body: Center(child: LogoAnimation()),
  ),
));

class LogoAnimation extends StatefulWidget {
  @override
  _LogoAnimationState createState() => _LogoAnimationState();
}

class _LogoAnimationState extends State<LogoAnimation> with SingleTickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 2),
  )..repeat(reverse: true);

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (_, __) => SizedBox(
        width: 100 + (_controller.value * 100),
        height: 100 + (_controller.value * 100),
        child: Image.network('https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'),
      ),
    );
  }
}`,

  Lab12: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: _Quiz()));

class _Quiz extends StatefulWidget {
  @override
  State<_Quiz> createState() => __QuizState();
}

class __QuizState extends State<_Quiz> {
  int i = 0, s = 0;
  final q = [
    {'q': '2+2?', 'a': ['3', '4', '5'], 'c': 1},
    {'q': 'Capital of France?', 'a': ['London', 'Paris', 'Rome'], 'c': 1},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: i < q.length ? Column(children: [
        Text(q[i]['q'] as String),
        for (var a in q[i]['a'] as List<String>)
          ElevatedButton(
            child: Text(a),
            onPressed: () => setState(() {
              if ((q[i]['a'] as List<String>).indexOf(a) == q[i]['c']) s++;
              i++;
            }),
          )
      ]) : Center(child: Text('Score: \$s/\${q.length}')),
    );
  }
}`
};