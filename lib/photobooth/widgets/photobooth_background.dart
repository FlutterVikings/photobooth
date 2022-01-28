import 'package:flutter/material.dart';

class PhotoboothBackground extends StatelessWidget {
  const PhotoboothBackground({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Stack(
      fit: StackFit.expand,
      children: [
        Image.asset(
          'assets/backgrounds/photobooth_background.png',
          repeat: ImageRepeat.repeat,
          filterQuality: FilterQuality.high,
        ),
      ],
    );
  }
}
