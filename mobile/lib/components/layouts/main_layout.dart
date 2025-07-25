import 'package:flutter/material.dart';

class MainLayout extends StatefulWidget {
  final Widget child;
  final String title;

  const MainLayout({Key? key, required this.child, required this.title}) : super(key: key);

  @override
  _MainLayoutState createState() => _MainLayoutState();
}

class _MainLayoutState extends State<MainLayout> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: Text(widget.title),
        leading: IconButton(
          icon: const Icon(Icons.menu),
          onPressed: () {
            _scaffoldKey.currentState?.openDrawer();
          },
        ),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text('Sidebar Header'),
            ),
            ListTile(
              title: const Text('Item 1'),
              onTap: () {
                // Handle item tap
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text('Item 2'),
              onTap: () {
                // Handle item tap
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
      body: widget.child,
    );
  }
}