import 'package:flutter/material.dart';
import 'package:photobooth_ui/photobooth_ui.dart';

import 'desktop_draggable_resizable_image.dart';
import 'mobile_draggable_resizable_image.dart';

export 'desktop_draggable_resizable_image.dart';
export 'mobile_draggable_resizable_image.dart';

/// {@template drag_update}
/// Drag update model which includes the position and size.
/// {@endtemplate}
class DragUpdate {
  /// {@macro drag_update}
  const DragUpdate({
    required this.position,
    required this.size,
    required this.constraints,
  });

  /// The position of the draggable asset.
  final Offset position;

  /// The size of the draggable asset.
  final Size size;

  /// The constraints of the parent view.
  final Size constraints;
}

/// {@template draggable_resizable_asset}
/// A widget which allows a user to drag and resize the provided [asset].
/// {@endtemplate}
class DraggableResizableAsset extends StatelessWidget {
  /// {@macro draggable_resizable_asset}
  const DraggableResizableAsset({
    Key? key,
    required this.asset,
    this.onUpdate,
  }) : super(key: key);

  /// The asset which will be rendered and will be draggable and resizable.
  final Asset asset;

  /// Drag/Resize value setter.
  final ValueSetter<DragUpdate>? onUpdate;

  @override
  Widget build(BuildContext context) {
    return PlatformBuilder(
      mobile: MobileDraggableResizableImage(
        image: asset.bytes,
        height: asset.image.height.toDouble(),
        onUpdate: onUpdate,
      ),
      desktop: DesktopDraggableResizableImage(
        image: asset.bytes,
        height: asset.image.height.toDouble(),
        onUpdate: onUpdate,
      ),
    );
  }
}