import React from 'react';
import { View, Text, TextInput, CheckBox } from 'react-native';
import tailwind from 'tailwind-rn';

const QuestionCard = ({ question, onResponseChange }) => {
  const handleInputChange = (value) => {
    onResponseChange(question.id, value);
  };

  if (question.type === 'text') {
    return (
      <View style={tailwind('mb-4')}>
        <Text>{question.question}</Text>
        <TextInput
          style={tailwind('border p-2 mt-2')}
          placeholder="Your answer"
          onChangeText={handleInputChange}
        />
      </View>
    );
  }

  if (question.type === 'grid') {
    return (
      <View style={tailwind('mb-4')}>
        <Text>{question.question}</Text>
        {/* Render grid options (radio buttons, checkboxes) */}
      </View>
    );
  }

  if (question.type === 'checkbox') {
    return (
      <View style={tailwind('mb-4')}>
        <Text>{question.question}</Text>
        <CheckBox
          value={false}
          onValueChange={handleInputChange}
        />
      </View>
    );
  }

  return null;
};

export default QuestionCard;
