import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleGenderSelection('male')}
        >
          {selectedGender === 'male' && <View style={styles.radioButtonDot} />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Male</Text>
      </View>

      <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleGenderSelection('female')}
        >
          {selectedGender === 'female' && <View style={styles.radioButtonDot} />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Female</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioButtonDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'blue', // Màu sắc khi được chọn
  },
  radioButtonText: {
    fontWeight: 'bold',
  },
});

export default GenderSelection;
