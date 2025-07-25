import 'package:flutter/material.dart';
import 'package:mobile/components/layouts/main_layout.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'XtremeSuperApp Mobile',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MainLayout(
        title: 'Ana Sayfa',
        child: Center(
          child: Text('Uygulama İçeriği Buraya Gelecek'),
        ),
      ),
    );
  }
}