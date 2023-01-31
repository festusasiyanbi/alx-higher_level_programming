#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "lists.h"

/**
 * main - check the code for
 *
 * Return: Always 0.
 */
int main(void)
{
    listint_t *head;

    head = NULL;
    add_nodeint_end(&head, 2);
    add_nodeint_end(&head, 5);
    add_nodeint_end(&head, 7);
    add_nodeint_end(&head, 13);
    add_nodeint_end(&head, 24);
    add_nodeint_end(&head, 98);
    add_nodeint_end(&head, 402);
    add_nodeint_end(&head, 1024);
    print_listint(head);

    printf("-----------------\n");

    insert_node(&head, 7465);
    insert_node(&head, 619);
    insert_node(&head, 2000);

    print_listint(head);

    free_listint(head);

    return (0);
}
