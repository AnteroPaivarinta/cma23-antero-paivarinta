package com.example;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.Scanner;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        Scanner scan = new Scanner(System.in);
        FlowPane componentGroup = new FlowPane();
        Label label = new Label();
        componentGroup.getChildren().add(label);
        System.out.println("Kerro title: ");
        String x = scan.nextLine();
        System.out.println(x);
        scene = new Scene(componentGroup);
        label.setText(x);
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