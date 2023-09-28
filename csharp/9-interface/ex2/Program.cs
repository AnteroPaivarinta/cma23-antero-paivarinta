using System;
using System.Collections.Generic;

public class Shape : IComparable<Shape>
{
    public double Area { get; protected set; }

    public int CompareTo(Shape? other)
    {
        if (other == null) return 1;

        if (this.Area > other.Area)
            return 1;
        else if (this.Area < other.Area)
            return -1;
        else
            return 0;
    }
}

public class Square : Shape
{
    public Square(double sideLength)
    {
        Area = sideLength * sideLength;
    }
}

public class Triangle : Shape
{
    public Triangle(double baseLength, double height)
    {
        Area = 0.5 * baseLength * height;
    }
}

public class Circle : Shape
{
    public Circle(double radius)
    {
        Area = Math.PI * radius * radius;
    }
}

class Program
{
    static void Main()
    {
        List<Shape> shapes = new List<Shape>
        {
            new Circle(5.0),
            new Square(4.0),
            new Triangle(3.0, 6.0),
            new Circle(3.0),
            new Square(6.0),
            new Triangle(4.0, 8.0)
        };

        shapes.Sort();

        foreach (Shape shape in shapes)
        {
            Console.WriteLine($"Area: {shape.Area}");
        }
    }
}