import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPauseCircle, faPlayCircle} from '@fortawesome/free-solid-svg-icons';

type Props = {
  startCountDownHandler: () => void;
  stopCountDownHandler: () => void;
  isTimerRunning: boolean;
  setIsTimerRunning: (value: boolean) => void;
};

export const TimerToggleButton: React.FC<Props> = ({
  startCountDownHandler,
  stopCountDownHandler,
  isTimerRunning,
}) => {
  const toggleTimer = () => {
    isTimerRunning ? stopCountDownHandler() : startCountDownHandler();
  };

  return (
    <Pressable
      onPress={toggleTimer}
      style={({pressed}) => [{opacity: pressed ? 0.6 : 1}]}>
      <View style={styles.container}>
        <FontAwesomeIcon
          icon={isTimerRunning ? faPauseCircle : faPlayCircle}
          size={125}
          style={styles.icon}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: 'center',
    borderColor: '#fff',
    marginVertical: 50,
  },
  icon: {alignSelf: 'center'},
});
