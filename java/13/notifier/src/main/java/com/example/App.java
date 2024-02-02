package com.example;

import javafx.application.Application;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        TextField input = new TextField();
        Label Label = new Label();
        Label labelNumber = new Label();
        Button button = new Button("Upload");
        input.textProperty().addListener(new ChangeListener<String>() {
            @Override
            public void changed(ObservableValue<? extends String> change,
                    String oldValue, String newValue) {

                System.out.println(oldValue + " -> " + newValue);

                labelNumber.setText(String.valueOf(newValue.length()));
            }
        });
        button.setOnAction((event) -> {
            Label.setText(input.getText());
        });

        HBox componentGroup = new HBox();
        componentGroup.setSpacing(20);
        componentGroup.getChildren().addAll(input, button, Label, labelNumber);
        Scene scene = new Scene(componentGroup);

        stage.setScene(scene);
        stage.show();
    }

    static void setRoot(String fxml) throws IOException {
        scene.setRoot(loadFXML(fxml));
    }

    private static Parent loadFXML(String fxml) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource(fxml + ".fxml"));
        return fxmlLoader.load();
    }

    public static void main(String[] args) {
        launch();
    }

}