import DocumentPicker from 'react-native-document-picker';
 
// Pick a single file
try {
  const res = await DocumentPicker.pick({
    type: [DocumentPicker.types.images],
  });
  console.log(
    res.uri,
    res.type, // mime type
    res.name,
    res.size
  );
} catch (err) {
  if (DocumentPicker.isCancel(err)) {
    // User cancelled the picker, exit any dialogs or menus and move on
  } else {
    throw err;
  }
}
 
// Pick multiple files
try {
  const results = await DocumentPicker.pickMultiple({
    type: [DocumentPicker.types.images],
  });
  for (const res of results) {
    console.log(
      res.uri,
      res.type, // mime type
      res.name,
      res.size
    );
  }
} catch (err) {
  if (DocumentPicker.isCancel(err)) {
    // User cancelled the picker, exit any dialogs or menus and move on
  } else {
    throw err;
  }
}