export const codeSnippets = {
  Lab1: `import 'package:flutter/material.dart'; 
 
void main() { 
  runApp(const HelloWorldApp()); 
} 
 
class HelloWorldApp extends StatelessWidget { 
  const HelloWorldApp({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      title: 'Hello Flutter App', 
      theme: ThemeData( 
        primarySwatch: Colors.blue, 
      ), 
      home: const HomeScreen(), 
    ); 
  } 
} 
 
class HomeScreen extends StatelessWidget { 
  const HomeScreen({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar( 
        title: const Text('Hello Flutter App'), 
      ), 
      body: const Center( 
        child: GreetingColumn(), 
      ), 
    ); 
  } 
} 
 
class GreetingColumn extends StatelessWidget { 
  const GreetingColumn({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return Column( 
      mainAxisAlignment: MainAxisAlignment.center, 
      children: const <Widget>[ 
        Text( 
          'Hello World', 
          style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold), 
        ), 
        SizedBox(height: 20), 
        Text( 
          'Hello Flutter', 
          style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold), 
        ), 
      ], 
    ); 
  } 
}`,

  Lab2: `import 'package:flutter/material.dart'; 
void main() { 
runApp(const MyApp()); 
} 
class MyApp extends StatelessWidget { 
const MyApp({super.key}); 
@override 
Widget build(BuildContext context) { 
return MaterialApp( 
debugShowCheckedModeBanner: false, 
title: 'Counter App', 
theme: ThemeData(primarySwatch: Colors.blue), 
home: const CounterScreen(), 
); 
} 
} 
class CounterScreen extends StatefulWidget { 
const CounterScreen({super.key}); 
 
  @override 
  _CounterScreenState createState() => _CounterScreenState(); 
} 
 
class _CounterScreenState extends State<CounterScreen> { 
  int _counter = 0; 
 
  void _increment() { 
    setState(() { 
      _counter++; 
    }); 
  } 
 
  void _decrement() { 
    setState(() { 
      _counter--; 
    }); 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text('Counter App')), 
      body: Center( 
        child: Column( 
          mainAxisAlignment: MainAxisAlignment.center, 
          children: [ 
            const Text( 
              'Counter Value:', 
              style: TextStyle(fontSize: 20), 
            ), 
            Text( 
              '$_counter', 
              style: const TextStyle(fontSize: 40, fontWeight: FontWeight.bold), 
            ), 
            const SizedBox(height: 20), 
            Row( 
              mainAxisAlignment: MainAxisAlignment.center, 
              children: [ 
                ElevatedButton( 
                  onPressed: _increment, 
                  child: const Text('Increment'), 
                ), 
                const SizedBox(width: 10), 
                ElevatedButton( 
                  onPressed: _decrement, 
                  child: const Text('Decrement'), 
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
 
void main() { 
  runApp(const MyApp()); 
} 
 
class MyApp extends StatelessWidget { 
  const MyApp({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      debugShowCheckedModeBanner: false, 
      title: 'Login App', 
      theme: ThemeData(primarySwatch: Colors.blue), 
      home: const LoginScreen(), 
    ); 
  } 
} 
 
class LoginScreen extends StatefulWidget { 
  const LoginScreen({super.key}); 
 
  @override 
  _LoginScreenState createState() => _LoginScreenState(); 
} 
 
class _LoginScreenState extends State<LoginScreen> { 
  final TextEditingController _emailController = TextEditingController(); 
  final TextEditingController _passwordController = TextEditingController(); 
 
  void _login() { 
    String email = _emailController.text; 
    String password = _passwordController.text; 
 
    if (email == "admin" && password == "12345") { 
      ScaffoldMessenger.of(context).showSnackBar( 
        const SnackBar(content: Text("Login Successful!")), 
      ); 
    } else { 
      ScaffoldMessenger.of(context).showSnackBar( 
        const SnackBar(content: Text("Invalid Credentials!")), 
      ); 
    } 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Login Screen")), 
      body: Padding( 
        padding: const EdgeInsets.all(20.0), 
        child: Column( 
          mainAxisAlignment: MainAxisAlignment.center, 
          children: [ 
            const Text( 
              "Welcome Back!", 
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold), 
            ), 
            const SizedBox(height: 20), 
            TextField( 
              controller: _emailController, 
              decoration: const InputDecoration( 
                labelText: "Email", 
                border: OutlineInputBorder(), 
              ), 
            ), 
            const SizedBox(height: 15), 
            TextField( 
              controller: _passwordController, 
              obscureText: true, 
              decoration: const InputDecoration( 
                labelText: "Password", 
                border: OutlineInputBorder(), 
              ), 
            ), 
            const SizedBox(height: 20), 
            ElevatedButton( 
              onPressed: _login, 
              style: ElevatedButton.styleFrom( 
                padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 15), 
              ), 
              child: const Text("Login"), 
            ), 
          ], 
        ), 
      ), 
    ); 
  } 
}`,

  Lab4: `import 'package:flutter/material.dart'; 
import 'package:fl_chart/fl_chart'; 
void main() { 
runApp(const ExpenseTrackerApp()); 
} 
class ExpenseTrackerApp extends StatelessWidget { 
const ExpenseTrackerApp({super.key}); 
@override 
Widget build(BuildContext context) { 
return MaterialApp( 
debugShowCheckedModeBanner: false, 
title: 'Expense Tracker', 
theme: ThemeData(primarySwatch: Colors.blue), 
home: const ExpenseHomeScreen(), 
); 
} 
} 
class ExpenseHomeScreen extends StatefulWidget { 
const ExpenseHomeScreen({super.key}); 
  @override 
  _ExpenseHomeScreenState createState() => _ExpenseHomeScreenState(); 
} 
 
class _ExpenseHomeScreenState extends State<ExpenseHomeScreen> { 
  final List<Map<String, dynamic>> _expenses = []; 
  final TextEditingController _titleController = TextEditingController(); 
  final TextEditingController _amountController = TextEditingController(); 
 
  void _addExpense() { 
    final String title = _titleController.text; 
    final double? amount = double.tryParse(_amountController.text); 
    if (title.isNotEmpty && amount != null) { 
      setState(() { 
        _expenses.add({"title": title, "amount": amount, "date": DateTime.now()}); 
      }); 
      _titleController.clear(); 
      _amountController.clear(); 
      Navigator.pop(context); 
    } 
  } 
 
  void _showAddExpenseDialog() { 
    showDialog( 
      context: context, 
      builder: (context) { 
        return AlertDialog( 
          title: const Text("Add Expense"), 
          content: Column( 
            mainAxisSize: MainAxisSize.min, 
            children: [ 
              TextField( 
                controller: _titleController, 
                decoration: const InputDecoration(labelText: "Title"), 
              ), 
              TextField( 
                controller: _amountController, 
                decoration: const InputDecoration(labelText: "Amount"), 
                keyboardType: TextInputType.number, 
              ), 
            ], 
          ), 
          actions: [ 
            TextButton( 
              onPressed: () => Navigator.pop(context), 
              child: const Text("Cancel"), 
            ), 
            ElevatedButton( 
              onPressed: _addExpense, 
              child: const Text("Add"), 
            ), 
          ], 
        ); 
      }, 
    ); 
  } 
 
  double _calculateTotal() { 
    return _expenses.fold(0, (sum, item) => sum + item["amount"]); 
  } 
 
  List<PieChartSectionData> _generateChartData() { 
    return _expenses.map((expense) { 
      return PieChartSectionData( 
        value: expense["amount"], 
        title: "\${expense["amount"].toStringAsFixed(0)}", 
        color: Colors.primaries[_expenses.indexOf(expense) % Colors.primaries.length], 
        radius: 60, 
      ); 
    }).toList(); 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Expense Tracker")), 
      body: Column( 
        children: [ 
          const SizedBox(height: 20), 
          SizedBox( 
            height: 200, 
            child: _expenses.isEmpty 
                ? const Center(child: Text("No expenses yet!", style: TextStyle(fontSize: 18))) 
                : PieChart( 
                    PieChartData( 
                      sections: _generateChartData(), 
                      centerSpaceRadius: 40, 
                      sectionsSpace: 2, 
                    ), 
                  ), 
          ), 
          Expanded( 
            child: ListView.builder( 
              itemCount: _expenses.length, 
              itemBuilder: (context, index) { 
                final expense = _expenses[index]; 
                return ListTile( 
                  title: Text(expense["title"]), 
                  subtitle: Text("\${expense["amount"].toStringAsFixed(2)}"), 
                  trailing: Text( 
                    "\${expense["date"].day}/\${expense["date"].month}/\${expense["date"].year}", 
                    style: const TextStyle(color: Colors.grey), 
                  ), 
                ); 
              }, 
            ), 
          ), 
        ], 
      ), 
      floatingActionButton: FloatingActionButton( 
        onPressed: _showAddExpenseDialog, 
        child: const Icon(Icons.add), 
      ), 
    ); 
  } 
}`,

  Lab5: `import 'package:flutter/material.dart'; 
 
void main() { 
  runApp(const MyApp()); 
} 
class MyApp extends StatelessWidget { 
  const MyApp({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      debugShowCheckedModeBanner: false, 
      title: 'Calculator', 
      theme: ThemeData(primarySwatch: Colors.blue), 
      home: const CalculatorScreen(), 
    ); 
  } 
} 
 
class CalculatorScreen extends StatefulWidget { 
  const CalculatorScreen({super.key}); 
  @override 
  _CalculatorScreenState createState() => _CalculatorScreenState(); 
} 
class _CalculatorScreenState extends State<CalculatorScreen> { 
  String _output = "0"; 
  String _input = ""; 
  double _num1 = 0; 
  double _num2 = 0; 
  String _operator = ""; 
  void _buttonPressed(String value) { 
    setState(() { 
      if (value == "C") { 
        _input = ""; 
        _output = "0"; 
        _num1 = 0; 
        _num2 = 0; 
        _operator = ""; 
      } else if (value == "=") { 
        if (_operator.isNotEmpty && _input.isNotEmpty) { 
          _num2 = double.tryParse(_input) ?? 0; 
          switch (_operator) { 
            case "+": 
              _output = (_num1 + _num2).toString(); 
              break; 
            case "-": 
              _output = (_num1 - _num2).toString(); 
              break; 
            case "×": 
              _output = (_num1 * _num2).toString(); 
              break; 
            case "÷": 
              _output = _num2 != 0 ? (_num1 / _num2).toString() : "Error"; 
              break; 
          } 
          _input = ""; 
          _operator = ""; 
        } 
      } else if (["+", "-", "×", "÷"].contains(value)) { 
        if (_input.isNotEmpty) { 
          _num1 = double.tryParse(_input) ?? 0; 
          _operator = value; 
          _input = ""; 
        } 
      } else { 
        _input += value; 
        _output = _input; 
      } 
    }); 
  } 
  Widget _buildButton(String text, {Color color = Colors.blue}) { 
    return Expanded( 
      child: ElevatedButton( 
        onPressed: () => _buttonPressed(text), 
        style: ElevatedButton.styleFrom( 
          padding: const EdgeInsets.all(20), 
          backgroundColor: color, 
        ), 
        child: Text( 
          text, 
          style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold), 
        ), 
      ), 
    ); 
  } 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Calculator")), 
      body: Column( 
        children: [ 
          Expanded( 
            child: Container( 
              alignment: Alignment.bottomRight, 
              padding: const EdgeInsets.all(20), 
              child: Text( 
                _output, 
                style: const TextStyle(fontSize: 40, fontWeight: FontWeight.bold), 
              ), 
            ), 
          ), 
          Column( 
            children: [ 
              Row(children: [_buildButton("7"), _buildButton("8"), _buildButton("9"), _buildButton("÷", 
color: Colors.orange)]), 
              Row(children: [_buildButton("4"), _buildButton("5"), _buildButton("6"), _buildButton("×", 
color: Colors.orange)]), 
              Row(children: [_buildButton("1"), _buildButton("2"), _buildButton("3"), _buildButton("-", 
color: Colors.orange)]), 
              Row(children: [_buildButton("0"), _buildButton("C", color: Colors.red), _buildButton("=", 
color: Colors.green), _buildButton("+", color: Colors.orange)]), 
            ], 
          ), 
        ], 
      ), 
    ); 
  } 
}`,

  Lab6: `import 'dart:convert'; 
import 'package:flutter/material.dart'; 
import 'package:http/http.dart' as http; 
 
void main() { 
  runApp(const MyApp()); 
} 
 
class MyApp extends StatelessWidget { 
  const MyApp({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      debugShowCheckedModeBanner: false, 
title: 'Weather App', 
theme: ThemeData(primarySwatch: Colors.blue), 
home: const WeatherScreen(), 
); 
} 
} 
class WeatherScreen extends StatefulWidget { 
const WeatherScreen({super.key}); 
@override 
_WeatherScreenState createState() => _WeatherScreenState(); 
} 
class _WeatherScreenState extends State<WeatherScreen> { 
final TextEditingController _cityController = TextEditingController(); 
String _weatherInfo = "Enter a city to check the weather!"; 
String _temperature = ""; 
String _iconUrl = ""; 
Future<void> _fetchWeather(String city) async { 
const String apiKey = "f170617f038a0fb58ea2713ec7bc4ed1"; // Replace with your API key 
final String url = 
"https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric"; 
    try { 
      final response = await http.get(Uri.parse(url)); 
 
      if (response.statusCode == 200) { 
        final data = jsonDecode(response.body); 
        setState(() { 
          _weatherInfo = data["weather"][0]["description"].toString().toUpperCase(); 
          _temperature = "\${data["main"]["temp"].toString()}°C"; 
          _iconUrl = 
              "https://openweathermap.org/img/wn/\${data["weather"][0]["icon"]}@2x.png"; 
        }); 
      } else { 
        setState(() { 
          _weatherInfo = "City not found. Try again!"; 
          _temperature = ""; 
          _iconUrl = ""; 
        }); 
      } 
    } catch (e) { 
      setState(() { 
        _weatherInfo = "Error fetching weather. Check your connection!"; 
        _temperature = ""; 
        _iconUrl = ""; 
      }); 
    } 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Weather App")), 
      body: Padding( 
        padding: const EdgeInsets.all(20.0), 
        child: Column( 
          mainAxisAlignment: MainAxisAlignment.center, 
          children: [ 
            TextField( 
              controller: _cityController, 
              decoration: InputDecoration( 
                labelText: "Enter City Name", 
                border: OutlineInputBorder(), 
                suffixIcon: IconButton( 
                  onPressed: () => _fetchWeather(_cityController.text), 
                  icon: const Icon(Icons.search), 
                ), 
              ), 
            ), 
            const SizedBox(height: 20), 
            if (_iconUrl.isNotEmpty) 
              Image.network(_iconUrl, height: 80), // Weather icon 
            Text( 
              _temperature, 
              style: const TextStyle(fontSize: 40, fontWeight: FontWeight.bold), 
            ), 
            const SizedBox(height: 10), 
            Text( 
              _weatherInfo, 
              textAlign: TextAlign.center, 
              style: const TextStyle(fontSize: 20), 
            ), 
          ], 
        ), 
      ), 
    ); 
  } 
}`,

  Lab7: `import 'dart:async'; 
import 'package:flutter/material.dart'; 
 
void main() { 
  runApp(const MyApp()); 
} 
 
class MyApp extends StatelessWidget { 
  const MyApp({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      debugShowCheckedModeBanner: false, 
      title: 'Stopwatch', 
      theme: ThemeData(primarySwatch: Colors.blue), 
      home: const StopwatchScreen(), 
    ); 
  } 
} 
 
class StopwatchScreen extends StatefulWidget { 
  const StopwatchScreen({super.key}); 
 
  @override 
  _StopwatchScreenState createState() => _StopwatchScreenState(); 
} 
 
class _StopwatchScreenState extends State<StopwatchScreen> { 
  Stopwatch _stopwatch = Stopwatch(); 
  Timer? _timer; 
 
  String _formatTime(int milliseconds) { 
    int seconds = (milliseconds ~/ 1000) % 60; 
    int minutes = (milliseconds ~/ (1000 * 60)) % 60; 
    int hours = (milliseconds ~/ (1000 * 60 * 60)); 
 
    String hoursStr = hours.toString().padLeft(2, '0'); 
    String minutesStr = minutes.toString().padLeft(2, '0'); 
    String secondsStr = seconds.toString().padLeft(2, '0'); 
 
    return "$hoursStr:$minutesStr:$secondsStr"; 
  } 
 
  void _startStopwatch() { 
    if (!_stopwatch.isRunning) { 
      _stopwatch.start(); 
      _timer = Timer.periodic(const Duration(milliseconds: 100), (timer) { 
        setState(() {}); 
      }); 
    } 
  } 
 
  void _stopStopwatch() { 
    if (_stopwatch.isRunning) { 
      _stopwatch.stop(); 
      _timer?.cancel(); 
      setState(() {}); 
    } 
  } 
 
  void _resetStopwatch() { 
    _stopwatch.reset(); 
    _timer?.cancel(); 
    setState(() {}); 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Stopwatch")), 
      body: Column( 
        mainAxisAlignment: MainAxisAlignment.center, 
        children: [ 
          const SizedBox(height: 50), 
          Center( 
            child: Text( 
              _formatTime(_stopwatch.elapsedMilliseconds), 
              style: const TextStyle(fontSize: 50, fontWeight: FontWeight.bold), 
            ), 
          ), 
          const SizedBox(height: 30), 
          Row( 
            mainAxisAlignment: MainAxisAlignment.center, 
            children: [ 
              ElevatedButton( 
                onPressed: _startStopwatch, 
                style: ElevatedButton.styleFrom(backgroundColor: Colors.green), 
                child: const Text("Start"), 
              ), 
              const SizedBox(width: 10), 
              ElevatedButton( 
                onPressed: _stopStopwatch, 
                style: ElevatedButton.styleFrom(backgroundColor: Colors.red), 
                child: const Text("Stop"), 
              ), 
              const SizedBox(width: 10), 
              ElevatedButton( 
                onPressed: _resetStopwatch, 
                style: ElevatedButton.styleFrom(backgroundColor: Colors.blue), 
                child: const Text("Reset"), 
              ), 
            ], 
          ), 
        ], 
      ), 
    ); 
  } 
}`,

  Lab8: `import 'package:flutter/material.dart'; 
void main() { 
runApp(const MyApp()); 
} 
class MyApp extends StatelessWidget { 
const MyApp({super.key}); 
@override 
Widget build(BuildContext context) { 
return MaterialApp( 
debugShowCheckedModeBanner: false, 
title: 'Navigation App', 
theme: ThemeData(primarySwatch: Colors.blue), 
home: const HomeScreen(), 
); 
} 
} 
class HomeScreen extends StatelessWidget { 
const HomeScreen({super.key}); 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Home Screen")), 
      body: Center( 
        child: ElevatedButton( 
          onPressed: () { 
            Navigator.push( 
              context, 
              MaterialPageRoute(builder: (context) => const SecondScreen()), 
            ); 
          }, 
          child: const Text("Go to Second Screen"), 
        ), 
      ), 
    ); 
  } 
} 
 
class SecondScreen extends StatelessWidget { 
  const SecondScreen({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Second Screen")), 
      body: Center( 
        child: ElevatedButton( 
          onPressed: () { 
            Navigator.pop(context); 
          }, 
          child: const Text("Back to Home Screen"), 
        ), 
      ), 
    ); 
  } 
}`,

  Lab9: `import 'package:flutter/material.dart'; 
 
void main() { 
  runApp(const MyApp()); 
} 
 
class MyApp extends StatelessWidget { 
  const MyApp({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      debugShowCheckedModeBanner: false, 
      title: 'E-Commerce UI', 
      theme: ThemeData(primarySwatch: Colors.blue), 
      home: const HomeScreen(), 
    ); 
  } 
} 
 
class HomeScreen extends StatelessWidget { 
  const HomeScreen({super.key}); 
 
  final List<Map<String, String>> products = const [ 
    {"name": "Nike Shoes", "price": "\$120", "image": "https://picsum.photos/200"}, 
    {"name": "Apple Watch", "price": "\$250", "image": "https://picsum.photos/201"}, 
    {"name": "Headphones", "price": "\$80", "image": "https://picsum.photos/220"}, 
  ]; 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar( 
        title: const Text("E-Commerce UI"), 
        actions: [ 
          IconButton( 
            icon: const Icon(Icons.shopping_cart), 
            onPressed: () { 
              Navigator.push(context, MaterialPageRoute(builder: (context) => const CartScreen())); 
            }, 
          ), 
        ], 
      ), 
      body: GridView.builder( 
        padding: const EdgeInsets.all(10), 
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount( 
          crossAxisCount: 2, 
          childAspectRatio: 0.8, 
          crossAxisSpacing: 10, 
          mainAxisSpacing: 10, 
        ), 
        itemCount: products.length, 
        itemBuilder: (context, index) { 
          return GestureDetector( 
            onTap: () { 
              Navigator.push( 
                context, 
                MaterialPageRoute( 
                  builder: (context) => ProductDetailsScreen( 
                    name: products[index]["name"]!, 
                    price: products[index]["price"]!, 
                    image: products[index]["image"]!, 
                  ), 
                ), 
              ); 
            }, 
            child: Card( 
              elevation: 4, 
              child: Column( 
                children: [ 
                  Image.network(products[index]["image"]!, height: 100, fit: BoxFit.cover), 
                  Padding( 
                    padding: const EdgeInsets.all(8.0), 
                    child: Text(products[index]["name"]!, style: const TextStyle(fontSize: 18, fontWeight: 
FontWeight.bold)), 
                  ), 
                  Text(products[index]["price"]!, style: const TextStyle(fontSize: 16, color: Colors.blue)), 
                ], 
              ), 
            ), 
          ); 
        }, 
      ), 
    ); 
  } 
} 
 
class ProductDetailsScreen extends StatelessWidget { 
  final String name; 
  final String price; 
  final String image; 
 
  const ProductDetailsScreen({super.key, required this.name, required this.price, required 
this.image}); 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: Text(name)), 
      body: Center( 
        child: Column( 
          mainAxisAlignment: MainAxisAlignment.center, 
          children: [ 
            Image.network(image, height: 150), 
            const SizedBox(height: 20), 
            Text(name, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold)), 
            Text(price, style: const TextStyle(fontSize: 20, color: Colors.blue)), 
            const SizedBox(height: 20), 
            ElevatedButton( 
              onPressed: () { 
                Navigator.push(context, MaterialPageRoute(builder: (context) => const CartScreen())); 
              }, 
              child: const Text("Add to Cart"), 
            ), 
          ], 
        ), 
      ), 
    ); 
  } 
} 
 
class CartScreen extends StatelessWidget { 
  const CartScreen({super.key}); 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Cart")), 
      body: const Center(child: Text("Your cart is empty!")), 
    ); 
  } 
}`,

  Lab10: `import 'dart:async'; 
import 'package:flutter/material.dart'; 
 
void main() { 
  runApp(const MyApp()); 
} 
class MyApp extends StatelessWidget { 
const MyApp({super.key}); 
@override 
Widget build(BuildContext context) { 
return MaterialApp( 
debugShowCheckedModeBanner: false, 
title: 'Animated Logo', 
theme: ThemeData(primarySwatch: Colors.blue), 
home: const AnimatedLogoScreen(), 
); 
} 
} 
class AnimatedLogoScreen extends StatefulWidget { 
const AnimatedLogoScreen({super.key}); 
@override 
_AnimatedLogoScreenState createState() => _AnimatedLogoScreenState(); 
} 
class _AnimatedLogoScreenState extends State<AnimatedLogoScreen> 
with SingleTickerProviderStateMixin { 
  late AnimationController _controller; 
  late Animation<double> _animation; 
 
  @override 
  void initState() { 
    super.initState(); 
    _controller = AnimationController( 
      vsync: this, 
      duration: const Duration(seconds: 2), 
    )..repeat(reverse: true); 
 
    _animation = Tween<double>(begin: 100, end: 200).animate( 
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut), 
    ); 
 
    Timer(const Duration(seconds: 5), () { 
      _controller.stop(); 
    }); 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      backgroundColor: Colors.white, 
      body: Center( 
        child: AnimatedBuilder( 
          animation: _animation, 
          builder: (context, child) { 
            return SizedBox( 
              width: _animation.value, 
              height: _animation.value, 
              child: Image.network( 
                'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png', 
              ), 
            ); 
          }, 
        ), 
      ), 
    ); 
  } 
 
  @override 
  void dispose() { 
    _controller.dispose(); 
    super.dispose(); 
  } 
}`,

  Lab11: `import 'package:flutter/material.dart'; 
import 'package:fl_chart/fl_chart'; 
void main() { 
runApp(const ExpenseTrackerApp()); 
} 
class ExpenseTrackerApp extends StatelessWidget { 
const ExpenseTrackerApp({super.key}); 
@override 
Widget build(BuildContext context) { 
return MaterialApp( 
debugShowCheckedModeBanner: false, 
title: 'Expense Tracker', 
theme: ThemeData(primarySwatch: Colors.blue), 
home: const ExpenseHomeScreen(), 
); 
} 
} 
class ExpenseHomeScreen extends StatefulWidget { 
const ExpenseHomeScreen({super.key}); 
  @override 
  _ExpenseHomeScreenState createState() => _ExpenseHomeScreenState(); 
} 
 
class _ExpenseHomeScreenState extends State<ExpenseHomeScreen> { 
  final List<Map<String, dynamic>> _expenses = []; 
  final TextEditingController _titleController = TextEditingController(); 
  final TextEditingController _amountController = TextEditingController(); 
 
  void _addExpense() { 
    final String title = _titleController.text; 
    final double? amount = double.tryParse(_amountController.text); 
    if (title.isNotEmpty && amount != null) { 
      setState(() { 
        _expenses.add({"title": title, "amount": amount, "date": DateTime.now()}); 
      }); 
      _titleController.clear(); 
      _amountController.clear(); 
      Navigator.pop(context); 
    } 
  } 
 
  void _showAddExpenseDialog() { 
    showDialog( 
      context: context, 
      builder: (context) { 
        return AlertDialog( 
          title: const Text("Add Expense"), 
          content: Column( 
            mainAxisSize: MainAxisSize.min, 
            children: [ 
              TextField( 
                controller: _titleController, 
                decoration: const InputDecoration(labelText: "Title"), 
              ), 
              TextField( 
                controller: _amountController, 
                decoration: const InputDecoration(labelText: "Amount"), 
                keyboardType: TextInputType.number, 
              ), 
            ], 
          ), 
          actions: [ 
            TextButton( 
              onPressed: () => Navigator.pop(context), 
              child: const Text("Cancel"), 
            ), 
            ElevatedButton( 
              onPressed: _addExpense, 
              child: const Text("Add"), 
            ), 
          ], 
        ); 
      }, 
    ); 
  } 
 
  double _calculateTotal() { 
    return _expenses.fold(0, (sum, item) => sum + item["amount"]); 
  } 
 
  List<PieChartSectionData> _generateChartData() { 
    return _expenses.map((expense) { 
      return PieChartSectionData( 
        value: expense["amount"], 
        title: "\${expense["amount"].toStringAsFixed(0)}", 
        color: Colors.primaries[_expenses.indexOf(expense) % Colors.primaries.length], 
        radius: 60, 
      ); 
    }).toList(); 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Expense Tracker")), 
      body: Column( 
        children: [ 
          const SizedBox(height: 20), 
          SizedBox( 
            height: 200, 
            child: _expenses.isEmpty 
                ? const Center(child: Text("No expenses yet!", style: TextStyle(fontSize: 18))) 
                : PieChart( 
                    PieChartData( 
                      sections: _generateChartData(), 
                      centerSpaceRadius: 40, 
                      sectionsSpace: 2, 
                    ), 
                  ), 
          ), 
          Expanded( 
            child: ListView.builder( 
              itemCount: _expenses.length, 
              itemBuilder: (context, index) { 
                final expense = _expenses[index]; 
                return ListTile( 
                  title: Text(expense["title"]), 
                  subtitle: Text("\${expense["amount"].toStringAsFixed(2)}"), 
                  trailing: Text( 
                    "\${expense["date"].day}/\${expense["date"].month}/\${expense["date"].year}", 
                    style: const TextStyle(color: Colors.grey), 
                  ), 
                ); 
              }, 
            ), 
          ), 
        ], 
      ), 
      floatingActionButton: FloatingActionButton( 
        onPressed: _showAddExpenseDialog, 
        child: const Icon(Icons.add), 
      ), 
    ); 
  } 
}`,

Lab12: `import 'package:flutter/material.dart'; 
void main() { 
  runApp(const QuizApp()); 
} 
class QuizApp extends StatelessWidget { 
  const QuizApp({super.key}); 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      debugShowCheckedModeBanner: false, 
      title: 'Quiz App', 
      theme: ThemeData(primarySwatch: Colors.blue), 
      home: const QuizScreen(), 
    ); 
  } 
} 
class QuizScreen extends StatefulWidget { 
  const QuizScreen({super.key}); 
 
  @override 
  _QuizScreenState createState() => _QuizScreenState(); 
} 
class _QuizScreenState extends State<QuizScreen> { 
  final List<Map<String, dynamic>> _questions = [ 
    { 
      "question": "What is the capital of France?", 
      "options": ["Berlin", "Madrid", "Paris", "Rome"], 
      "answer": "Paris" 
    }, 
    { 
      "question": "Which programming language is used in Flutter?", 
      "options": ["Java", "Dart", "Kotlin", "Swift"], 
      "answer": "Dart" 
    }, 
    { 
      "question": "Who developed Flutter?", 
      "options": ["Apple", "Microsoft", "Google", "Facebook"], 
      "answer": "Google" 
    }, 
  ]; 
  int _currentQuestionIndex = 0; 
  int _score = 0; 
  bool _quizCompleted = false; 
 
  void _checkAnswer(String selectedAnswer) { 
    if (selectedAnswer == _questions[_currentQuestionIndex]["answer"]) { 
      _score++; 
    } 
    setState(() { 
      if (_currentQuestionIndex < _questions.length - 1) { 
        _currentQuestionIndex++; 
      } else { 
        _quizCompleted = true; 
      } 
    }); 
  } 
 
  void _restartQuiz() { 
    setState(() { 
      _currentQuestionIndex = 0; 
      _score = 0; 
      _quizCompleted = false; 
    }); 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar(title: const Text("Quiz App")), 
      body: _quizCompleted 
          ? ScoreBoard(score: _score, total: _questions.length, restartQuiz: _restartQuiz) 
          : QuizQuestion( 
              question: _questions[_currentQuestionIndex]["question"], 
              options: _questions[_currentQuestionIndex]["options"], 
              checkAnswer: _checkAnswer, 
            ), 
    ); 
  } 
} 
 
class QuizQuestion extends StatelessWidget { 
  final String question; 
  final List<String> options; 
  final Function(String) checkAnswer; 
 
  const QuizQuestion({super.key, required this.question, required this.options, required 
this.checkAnswer}); 
 
  @override 
  Widget build(BuildContext context) { 
    return Padding( 
      padding: const EdgeInsets.all(20), 
      child: Column( 
        mainAxisAlignment: MainAxisAlignment.center, 
        children: [ 
          Text( 
            question, 
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold), 
            textAlign: TextAlign.center, 
          ), 
          const SizedBox(height: 20), 
          ...options.map((option) => ElevatedButton( 
                onPressed: () => checkAnswer(option), 
                child: Text(option, style: const TextStyle(fontSize: 18)), 
              )), 
        ], 
      ), 
    ); 
  } 
} 
 
class ScoreBoard extends StatelessWidget { 
  final int score; 
  final int total; 
  final VoidCallback restartQuiz; 
 
  const ScoreBoard({super.key, required this.score, required this.total, required 
this.restartQuiz}); 
 
  @override 
  Widget build(BuildContext context) { 
    return Center( 
      child: Column( 
        mainAxisAlignment: MainAxisAlignment.center, 
        children: [ 
          Text("Quiz Completed!", style: const TextStyle(fontSize: 24, fontWeight: 
FontWeight.bold)), 
          const SizedBox(height: 20), 
          Text("Your Score: $score / $total", style: const TextStyle(fontSize: 22, color: 
Colors.blue)), 
          const SizedBox(height: 20), 
          ElevatedButton( 
            onPressed: restartQuiz, 
            child: const Text("Restart Quiz"), 
          ), 
        ], 
      ), 
    ); 
  } 
}`
}; 